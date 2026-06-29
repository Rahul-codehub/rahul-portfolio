"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

const achievements = [
    {
        title: "1st Consolation Prize - Hackverse National Hackathon",
        organization: "IILM University, Gurugram",
        date: "April 2025",
        description:
            "Awarded the 1st Consolation Prize at the Hackverse National Hackathon for developing an innovative software solution while demonstrating teamwork, problem-solving, and software engineering skills.",
    },

    {
        title: "3rd Place - Internal College Hackathon",
        organization: "COER University, Roorkee",
        date: "April 2025",
        description:
            "Secured 3rd place in the Internal College Hackathon by designing and developing an innovative software solution under competitive conditions.",
    },

    {
        title: "5th Place - Brain Byte 10 Weekly Technical Quiz",
        organization:
            "Department of Computer Science & Engineering, COER University",
        date: "October 2025",
        description:
            "Ranked 5th in the Brain Byte 10 Weekly Technical Quiz, demonstrating strong programming fundamentals, logical reasoning, algorithmic thinking, and problem-solving skills among students from multiple academic years.",
    },

    {
        title: "Adobe India Hackathon",
        organization: "Unstop",
        date: "July 2025",
        description:
            "Participated in the Adobe India Hackathon, collaborating on innovative software solutions while enhancing coding, teamwork, and software engineering skills.",
    },

    {
        title: "TVS Credit EPIC 7.0 - IT Challenge",
        organization: "Unstop",
        date: "September 2025",
        description:
            "Participated in the TVS Credit EPIC 7.0 IT Challenge, solving real-world technical challenges while demonstrating analytical thinking and software development skills.",
    },
];

const Achievements = () => {

    const [showAll, setShowAll] = useState(false);

    return (
        <section
            id="achievements"
            className="py-16 md:py-20"
        >
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-14 gradient-text"
                >
                    Achievements
                </motion.h2>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {(showAll
                        ? achievements
                        : achievements.slice(0, 4)
                    ).map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="
                                glass
                                rounded-3xl
                                p-7
                                border
                                border-transparent
                                hover:border-blue-400/30
                                transition-all
                                duration-500
                                hover:-translate-y-2
                            "
                        >

                            <div className="flex items-center gap-4 mb-5">

                                <div className="p-3 rounded-2xl bg-yellow-500/10">

                                    <Trophy
                                        size={28}
                                        className="text-yellow-400"
                                    />

                                </div>

                                <div>

                                    <h3 className="text-xl font-semibold">

                                        {item.title}

                                    </h3>

                                    <p className="text-gray-400">

                                        {item.organization}

                                    </p>

                                </div>

                            </div>

                            <span className="text-blue-400 text-sm">

                                {item.date}

                            </span>

                            <p className="text-gray-300 mt-4 leading-relaxed">

                                {item.description}

                            </p>

                        </motion.div>

                    ))}

                </div>

                {/* View More */}
                {achievements.length > 4 && (

                    <div className="flex justify-center mt-12">

                        <button
                            onClick={() =>
                                setShowAll(!showAll)
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                px-6
                                py-3
                                rounded-2xl
                                glass
                                border
                                border-white/10
                                hover:border-blue-400
                                hover:bg-blue-500/10
                                transition-all
                                duration-300
                                font-medium
                            "
                        >

                            {showAll ? (
                                <>
                                    Show Less
                                    <ChevronUp size={18} />
                                </>
                            ) : (
                                <>
                                    View All Achievements
                                    <ChevronDown size={18} />
                                </>
                            )}

                        </button>

                    </div>

                )}

            </div>
        </section>
    );
};

export default Achievements;