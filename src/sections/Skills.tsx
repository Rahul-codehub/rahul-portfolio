"use client";

import { motion } from "framer-motion";

import {
    SiPython,
    SiOpenai,
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiDocker,
} from "react-icons/si";

import { FaBrain } from "react-icons/fa";

const skills = [
    {
        name: "Python",
        level: "95%",
        icon: <SiPython size={26} className="text-yellow-400" />,
    },

    {
        name: "Machine Learning",
        level: "90%",
        icon: <FaBrain size={26} className="text-pink-400" />,
    },

    {
        name: "OpenAI APIs",
        level: "92%",
        icon: <SiOpenai size={26} className="text-green-400" />,
    },

    {
        name: "Next.js",
        level: "90%",
        icon: <SiNextdotjs size={26} className="text-white" />,
    },

    {
        name: "TypeScript",
        level: "85%",
        icon: <SiTypescript size={26} className="text-blue-400" />,
    },

    {
        name: "React",
        level: "92%",
        icon: <SiReact size={26} className="text-cyan-400" />,
    },

    {
        name: "Node.js",
        level: "84%",
        icon: <SiNodedotjs size={26} className="text-green-500" />,
    },

    {
        name: "MongoDB",
        level: "82%",
        icon: <SiMongodb size={26} className="text-green-400" />,
    },

    {
        name: "Tailwind CSS",
        level: "95%",
        icon: <SiTailwindcss size={26} className="text-cyan-300" />,
    },

    {
        name: "Docker",
        level: "75%",
        icon: <SiDocker size={26} className="text-blue-500" />,
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24">

            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-14 gradient-text text-center"
                >
                    Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">

                    {skills.map((skill, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                            }}
                            viewport={{ once: true }}
                            className="
                            group
                            glass
                            rounded-full
                            w-[120px]
                            h-[120px]
                            md:w-[140px]
                            md:h-[140px]
                            border border-white/10
                            hover:border-blue-400/40
                            hover:scale-110
                            transition-all duration-300
                            flex flex-col
                            items-center
                            justify-center
                            relative
                            overflow-hidden
                            "
                        >

                            {/* Icon */}
                            <div className="transition-all duration-300 group-hover:-translate-y-2">
                                {skill.icon}
                            </div>

                            {/* Skill Name */}
                            <p className="text-white text-sm mt-3 transition-all duration-300 group-hover:opacity-0">
                                {skill.name}
                            </p>

                            {/* Percentage */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">

                                {/* Small Icon */}
                                <div className="mb-3 scale-90 opacity-80">
                                    {skill.icon}
                                </div>

                                {/* Percentage */}
                                <span className="text-2xl font-bold gradient-text">
                                    {skill.level}
                                </span>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Skills;