"use client";

import { useEffect, useRef, useState } from "react";

import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = () => {

    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState("");

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hi, I'm Rahul's AI assistant. Ask me anything about Rahul.",
        },
    ]);

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages]);

    const sendMessage = async () => {

        if (!message.trim()) return;

        const userMessage = {
            role: "user",
            content: message,
        };

        setMessages((prev) => [...prev, userMessage]);

        setMessage("");

        try {

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message,
                }),
            });

            const data = await res.json();

            const botMessage = {
                role: "assistant",
                content: data.reply,
            };

            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Something went wrong.",
                },
            ]);

        }
    };

    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Floating Button */}
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[70] flex flex-col items-end gap-3">

                {/* Tooltip */}
                {!open && (
                    <div className="px-4 py-2 rounded-2xl glass text-white text-sm animate-bounce shadow-lg">
                        Ask me?
                    </div>
                )}

                {/* Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="
                    w-14 h-14 md:w-16 md:h-16
                    rounded-full
                    bg-blue-500
                    hover:bg-blue-600
                    transition-all duration-300
                    shadow-[0_0_30px_rgba(59,130,246,0.8)]
                    flex items-center justify-center
                    text-white text-xl md:text-2xl
                    "
                >
                    {open ? <FaTimes /> : <FaRobot />}
                </button>

            </div>

            {/* Chat Window */}
            {open && (

                <div
                    className="
                    fixed
                    inset-x-3
                    bottom-24
                    md:bottom-28
                    md:right-6
                    md:left-auto
                    w-auto
                    md:w-[360px]
                    h-[72vh]
                    md:h-[520px]
                    glass
                    rounded-3xl
                    border border-white/10
                    z-[70]
                    flex flex-col
                    overflow-hidden
                    shadow-2xl
                    "
                >

                    {/* Header */}
                    <div className="p-4 md:p-5 border-b border-white/10 bg-white/5 backdrop-blur-md">

                        <h2 className="text-lg md:text-xl font-semibold gradient-text">
                            AI Assistant
                        </h2>

                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4">

                        {messages.map((msg, index) => (

                            <div
                                key={index}
                                className={`
                                max-w-[88%]
                                px-4 py-3
                                rounded-2xl
                                text-sm md:text-base
                                leading-relaxed
                                break-words
                                ${msg.role === "user"
                                        ? "ml-auto bg-blue-500 text-white"
                                        : "bg-white/10 text-gray-200"}
                                `}
                            >
                                {msg.content}
                            </div>

                        ))}

                        <div ref={messagesEndRef} />

                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-white/10 flex gap-2 bg-black/20">

                        <input
                            type="text"
                            placeholder="Ask something..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                            className="
                            flex-1
                            min-w-0
                            bg-white/5
                            border border-white/10
                            rounded-2xl
                            px-4 py-3
                            outline-none
                            text-sm
                            text-white
                            placeholder:text-gray-400
                            "
                        />

                        <button
                            onClick={sendMessage}
                            className="
                            px-4 md:px-5
                            rounded-2xl
                            bg-blue-500
                            hover:bg-blue-600
                            transition-all duration-300
                            text-sm
                            font-medium
                            text-white
                            "
                        >
                            Send
                        </button>

                    </div>

                </div>

            )}
        </>
    );
};

export default Chatbot;