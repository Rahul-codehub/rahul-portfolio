"use client";

import { useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
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

            <div className="max-w-6xl mx-auto px-4">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-400 max-w-2xl mx-auto mb-14"
                >
                    Let's build something amazing together. I'm always open for
                    discussing and collaboration opportunities.
                </motion.p>


                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="
        glass
        rounded-3xl
        p-8
        border
        border-white/10
        h-full
    "
                    >

                        <h3 className="text-2xl font-semibold mb-6">
                            Get in Touch
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-8">
                            Whether you have an exciting AI project, internship opportunity,
                            freelance work, or simply want to connect, I'd be happy to hear
                            from you.
                        </p>

                        <div className="space-y-6">

                            <a
                                href="mailto:workwithrahul75@zohomail.in"
                                className="flex items-center gap-4 hover:text-blue-400 transition-colors"
                            >
                                <FaEnvelope className="text-blue-400" />
                                <span>workwithrahul75@zohomail.in</span>
                            </a>

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-blue-400" />
                                <span>Roorkee, Uttarakhand, India</span>
                            </div>

                            <a
                                href="https://linkedin.com/in/rahul-kumar75"
                                target="_blank"
                                className="flex items-center gap-4 hover:text-blue-400 transition-colors"
                            >
                                <FaLinkedin className="text-blue-400" />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/Rahul-codehub"
                                target="_blank"
                                className="flex items-center gap-4 hover:text-blue-400 transition-colors"
                            >
                                <FaGithub className="text-blue-400" />
                                <span>GitHub</span>
                            </a>

                        </div>

                    </motion.div>




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
border
border-white/10
outline-none
focus:border-blue-400
focus:ring-2
focus:ring-blue-400/20
transition-all
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
border
border-white/10
outline-none
focus:border-blue-400
focus:ring-2
focus:ring-blue-400/20
transition-all
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
hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
transition-all
duration-300
font-semibold
disabled:opacity-60
disabled:cursor-not-allowed
"
                        >
                            {loading
                                ? "Sending..."
                                : "Send Message"}
                        </button>

                        {success && (

                            <p className="text-center text-green-400 font-medium ">

                                {success}

                            </p>

                        )}

                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;