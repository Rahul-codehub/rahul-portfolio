"use client";

import { motion } from "framer-motion";

const LoadingScreen = () => {

    return (

        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed inset-0
            bg-black
            z-[9999]
            flex flex-col
            items-center
            justify-center
            "
        >

            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="
                text-5xl
                font-bold
                gradient-text
                mb-4
                "
            >
                Rahul Kumar
            </motion.h1>

            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.4,
                }}
                className="text-gray-400"
            >
                AI Engineer • LLM Developer • Full Stack Developer
            </motion.p>

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.2,
                }}
                className="
                mt-8
                w-4
                h-4
                rounded-full
                bg-blue-500
                "
            />

        </motion.div>

    );
};

export default LoadingScreen;