"use client";

import { motion } from "framer-motion";
import Skills from "./Skills";

const experiences = [
    {
        title: "Web Development Intern",
        company: "Codec Technologies India • Remote",
        year: "June 2025 – July 2025",
        description:
            "Gained hands-on experience in full-stack web development by building responsive and scalable web applications. Developed dynamic user interfaces using React.js, created RESTful APIs with Node.js and Express.js, and managed MongoDB databases. Collaborated on real-world development tasks while following Git-based workflows and industry-standard software engineering practices.",
       Skills: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Git",
        ],
    },

    
    
];
const Experience = () => {
    return (
        <section id="experience">

            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
                >
                    Experience
                </motion.h2>

                {/* Timeline */}
                <div className="relative border-l border-white/10 ml-4">

                    {experiences.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="mb-14 ml-10 relative"
                        >

                            {/* Timeline Dot */}
                            <div className="absolute -left-[52px] top-2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                            {/* Card */}
                            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">

                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="text-blue-400">
                                            {item.company}
                                        </p>
                                    </div>

                                    <span className="text-gray-400">
                                        {item.year}
                                    </span>

                                </div>

                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Experience;