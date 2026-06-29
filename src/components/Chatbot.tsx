"use client";

import { useEffect, useRef, useState } from "react";

import { FaRobot, FaTimes } from "react-icons/fa";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

const Chatbot = () => {

    const [open, setOpen] = useState(false);



    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            content:
                "Hello! I'm Rahul Kumar's personal AI portfolio assistant. I can answer questions about Rahul's background, projects, skills, education, experience, certifications, achievements, and career goals. How can I assist you today?",
        },
    ]);
    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });

        if (open) {
           setTimeout(() => {
    inputRef.current?.focus();
}, 0);
            
        }

    }, [messages, open]);

    const sendMessage = async () => {



        if (!message.trim() || loading) return;

        const userMessage: ChatMessage = {
            role: "user",
            content: message.trim(),
        };

        const updatedMessages = [
            ...messages,
            userMessage,
        ];

        setMessages(updatedMessages);

        setMessage("");

        setLoading(true);

        try {

            const res = await fetch("/api/chat", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    messages: updatedMessages.slice(-10),
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to get AI response.");
            }

           const reader = res.body?.getReader();

if (!reader) {
    throw new Error("No response stream.");
}

const decoder = new TextDecoder();

let fullResponse = "";

setMessages((prev) => [
    ...prev,
    {
        role: "assistant",
        content: "",
    },
]);

while (true) {

    const { done, value } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value);

    fullResponse += chunk;

    setMessages((prev) => {

        const updated = [...prev];

        updated[updated.length - 1] = {
            role: "assistant",
            content: fullResponse,
        };

        return updated;

    });

}

        } catch (error) {

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Sorry, something went wrong. Please try again.",
                },
            ]);

        } finally {

            setLoading(false);
            inputRef.current?.focus();
        }
    };

   
    

    return (
        <>

            {/* Overlay */}
            {
                open && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300"
                        onClick={() => setOpen(false)}
                    />
                )
            }

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
            {
                open && (

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
                        <div className="p-5 border-b border-white/10 bg-white/5 backdrop-blur-md">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white">

                                    <FaRobot size={20} />

                                </div>

                                <div>

                                    <h2 className="text-lg font-semibold gradient-text">
                                        Rahul's AI Assistant
                                    </h2>

                                    <div className="flex items-center gap-2 text-xs text-gray-400">

                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                                        Online • Typically replies instantly

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4">
                           
                            {messages.map((msg, index) => (

                                <div
                                    key={index}
                                    className="relative group"
                                >

                                    <div
                                        className={`
                                        max-w-[88%]
                                        px-4
                                        py-3
                                        rounded-2xl
                                        text-sm
                                        md:text-base
                                        leading-relaxed
                                        break-words
                                        ${msg.role === "user"
                                                ? "ml-auto bg-blue-500 text-white"
                                                : "bg-white/10 text-gray-200"
                                            }
            `}
                                    >

                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {msg.content}
                                        </ReactMarkdown>

                                    </div>



                                </div>

                            ))}
                            
                            <div ref={messagesEndRef} />

                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-white/10 flex gap-2 bg-black/20">

                            <input
                                ref={inputRef}
                                disabled={loading}
                                type="text"
                                placeholder="Ask about Rahul..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {

                                    if (e.key === "Enter" && !e.shiftKey) {

                                        e.preventDefault();

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
                                disabled={loading}
                                className="
                                px-4 md:px-5
                                rounded-2xl
                                bg-blue-500
                                hover:bg-blue-600
                                disabled:bg-blue-500/50
                                disabled:cursor-not-allowed
                                transition-all
                                duration-300
                                text-sm
                                font-medium
                                text-white
                                "
                            >
                               {loading ? (
    <span className="animate-pulse">Sending...</span>
) : (
    "Send"
)}
                            </button>

                        </div>

                    </div>

                )
            }
        </>
    );

};
export default Chatbot;