"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
    {
        title: "AWS Solutions Architecture Job Simulation",
        issuer: "AWS × Forage",
        year: "2025",
        description:
            "Completed a practical job simulation focused on designing scalable cloud solutions using AWS architectural best practices.",
        skills: [
            "AWS",
            "Cloud Architecture",
            "System Design",
            "Scalability",
        ],
        link: "https://www.linkedin.com/posts/rahul-kumar75_aws-cloudcomputing-solutionsarchitect-activity-7358174348068708353-JJMw",
    },

    {
        title: "AI Tools Workshop",
        issuer: "be10X",
        year: "2025",
        description:
            "Completed a hands-on AI Tools Workshop covering modern Generative AI tools, prompt engineering, productivity workflows, and practical applications of AI in software development.",
        skills: [
            "Generative AI",
            "Prompt Engineering",
            "AI Tools",
            "Automation",
            "Productivity",
        ],
        link: "https://www.linkedin.com/posts/rahul-kumar75_continuouslearning-professionaldevelopment-activity-7335326661963390977-mAHL",
    },
];

const Certifications = () => {
    return (
        <section
            id="certifications"
            className="py-20"
        >
            <div className="max-w-6xl mx-auto px-4">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-14 gradient-text"
                >
                    Certifications
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {certifications.map((cert, index) => (

                        <motion.div
                            key={index}
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
                                p-7
                                border border-white/10
                                hover:border-blue-400/40
                                hover:-translate-y-2
                                transition-all
                                duration-300
                            "
                        >

                            <div className="flex items-start gap-4 mb-5">

                                <div className="p-3 rounded-2xl bg-blue-500/10">

                                    <Award
                                        size={26}
                                        className="text-blue-400"
                                    />

                                </div>
                                <div className="flex-1">
                                    <div className="flex-1 flex items-start justify-between gap-4">

                                        <div>

                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                    text-xl
                    font-semibold
                    text-white
                    hover:text-blue-400
                    transition-colors
                    duration-300
                "
                                            >
                                                {cert.title}
                                            </a>

                                            <p className="text-gray-400 mt-2">
                                                Issued by{" "}
                                                <span className="text-white font-medium">
                                                    {cert.issuer}
                                                </span>
                                            </p>

                                        </div>

                                        <span className="text-blue-400 text-sm whitespace-nowrap">
                                            {cert.year}
                                        </span>

                                    </div>
                                    <div className="mt-3">

                                        <span
                                            className="
                inline-flex
                items-center
                rounded-full
                bg-green-500/10
                border
                border-green-500/20
                px-3
                py-1
                text-xs
                font-medium
                text-green-400
            "
                                        >
                                            ✓ Verified Certificate
                                        </span>

                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-5">

                                {cert.description}

                            </p>

                            <div className="flex flex-wrap gap-2">

                                {cert.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="
                                            px-3
                                            py-1
                                            rounded-full
                                            text-xs
                                            bg-blue-500/10
                                            border
                                            border-blue-500/20
                                            text-blue-300
                                        "
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Certifications;