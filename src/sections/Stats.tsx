"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    {
        value: 10,
        suffix: "+",
        label: "Projects",
    },
    {
        value: 10,
        suffix: "+",
        label: "Certifications",
    },
    {
        value: 2,
        suffix: "+",
        label: "Internships",
    },
    {
        value: 3,
        suffix: "+",
        label: "Bootcamps",
    },
];
const Stats = () => {
    return (
        <section
            id="stats"
            className="py-16 md:py-20"
        >
            <div className="max-w-6xl mx-auto px-4">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((stat, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="
                            glass
                            rounded-3xl
                            p-8
                            text-center
                            border border-white/10
                            hover:border-blue-400/30
                            transition-all
                            "
                        >

                            <h3 className="text-4xl font-bold gradient-text mb-2">

                                <CountUp
                                    end={stat.value}
                                    duration={2}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />

                                {stat.suffix}

                            </h3>

                            <p className="text-gray-400">
                                {stat.label}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Stats;