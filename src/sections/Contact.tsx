"use client";

import { useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

const Contact = () => {

    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    const [loading, setLoading] =
        useState(false);

    const [success, setSuccess] =
        useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {

        setForm({
            ...form,
            [e.target.name]:
                e.target.value,
        });

    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        setLoading(true);

        setSuccess("");

        try {

            await emailjs.send(
                process.env
                    .NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env
                    .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name:
                        form.from_name,
                    from_email:
                        form.from_email,
                    message:
                        form.message,
                },
                process.env
                    .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setSuccess(
                "Message sent successfully!"
            );

            setForm({
                from_name: "",
                from_email: "",
                message: "",
            });

        } catch (error) {

            setSuccess(
                "Failed to send message."
            );

        }

        setLoading(false);

    };

    return (
        <section
            id="contact"
            className="py-16 md:py-20"
        >

            <div className="max-w-3xl mx-auto px-4">

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    gradient-text
                    text-center
                    mb-10
                    "
                >
                    Contact Me
                </motion.h2>

                <form
                    onSubmit={handleSubmit}
                    className="
                    glass
                    rounded-3xl
                    p-8
                    border border-white/10
                    space-y-6
                    "
                >

                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        value={form.from_name}
                        onChange={
                            handleChange
                        }
                        required
                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-white/5
                        border border-white/10
                        outline-none
                        "
                    />

                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        value={form.from_email}
                        onChange={
                            handleChange
                        }
                        required
                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-white/5
                        border border-white/10
                        outline-none
                        "
                    />

                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Your Message"
                        value={form.message}
                        onChange={
                            handleChange
                        }
                        required
                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-white/5
                        border border-white/10
                        outline-none
                        resize-none
                        "
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                        w-full
                        py-4
                        rounded-xl
                        bg-blue-500
                        hover:bg-blue-600
                        transition-all
                        "
                    >
                        {loading
                            ? "Sending..."
                            : "Send Message"}
                    </button>

                    {success && (

                        <p className="text-center text-green-400">

                            {success}

                        </p>

                    )}

                </form>

            </div>

        </section>
    );
};

export default Contact;