"use client";

import { motion } from "framer-motion";

const certifications = [

    {
        title: "Machine Learning Specialization",
        issuer: "Coursera",
        year: "2025",
        link: "https://linkedin.com",
    },

    {
        title: "AI & Generative AI",
        issuer: "LinkedIn Learning",
        year: "2025",
        link: "https://linkedin.com",
    },

    {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        year: "2024",
        link: "https://linkedin.com",
    },

    {
        title: "Python for Data Science",
        issuer: "IBM",
        year: "2024",
        link: "https://linkedin.com",
    },

];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24">

            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-14 gradient-text text-center"
                >
                    Certifications
                </motion.h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {certifications.map((cert, index) => (

                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="
                            glass
                            rounded-3xl
                            p-6
                            border border-white/10
                            hover:border-blue-400/40
                            hover:-translate-y-2
                            transition-all duration-300
                            block
                            "
                        >

                            <div className="flex items-center justify-between mb-4">

                                <h3 className="text-xl font-semibold text-white">
                                    {cert.title}
                                </h3>

                                <span className="text-blue-400 text-sm">
                                    {cert.year}
                                </span>

                            </div>

                            <p className="text-gray-400">
                                Issued by {cert.issuer}
                            </p>

                        </motion.a>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Certifications;