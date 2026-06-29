"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { Circle, Star, Mail } from "lucide-react";

import { TypeAnimation } from "react-type-animation";

import ResumeModal from "@/components/ResumeModal";

const Hero = () => {

    const [showResume, setShowResume] =
        useState(false);

    return (

        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-0 left-0" />

            <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0" />

            {/* Content */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 px-6">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="text-blue-400 mb-5 text-lg uppercase tracking-wide">

                        <TypeAnimation
                            sequence={[
                                "B.Tech CSE @ COER'27",
                                2000,
                                "AI Engineer",
                                2000,
                                "Full Stack Developer",
                                2000,
                                "LLM Developer",
                                2000,
                                "AI Automation Builder",
                                2000,
                                
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />

                    </div>

                    <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-5">

                        Hi, I'm{" "}

                        <span className="gradient-text">
                            Rahul Kumar
                        </span>

                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed text-justify mb-6">

                        I build AI-powered applications,
                        LLM systems, intelligent automation tools,
                        and modern web experiences focused on
                        performance, scalability, and innovation.

                    </p>

                    {/* Resume Buttons */}
                    <div className="flex gap-4 flex-wrap">

                        <button
                            onClick={() =>
                                setShowResume(true)
                            }
                            className="
                            px-8 py-4
                            rounded-2xl
                            border border-white/20
                            hover:bg-white/10
                            hover:scale-105
                            transition-all duration-300
                            text-white text-lg font-medium
                            "
                        >
                            View Resume
                        </button>

                        <a
                            href="/resume.pdf"
                            download
                            className="
                            px-8 py-4
                            rounded-2xl
                            bg-blue-500
                            hover:bg-blue-600
                            hover:scale-105
                            transition-all duration-300
                            text-white text-lg font-medium
                            "
                        >
                            Download Resume
                        </a>

                    </div>



                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >

                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        className="
                        w-[350px]
                        h-[350px]
                        rounded-full
                        glass
                        glow
                        overflow-hidden
                        border border-white/10
                        "
                    >

                        <img
                            src="/profile.jpg"
                            alt="Rahul Kumar"
                            className="w-full h-full object-cover"
                        />

                    </motion.div>

                </motion.div>

            </div>

            {/* Resume Modal */}
            <ResumeModal
                isOpen={showResume}
                onClose={() =>
                    setShowResume(false)
                }
            />

        </section>

    );
};

export default Hero;

