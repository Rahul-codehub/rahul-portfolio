"use client";

import { motion } from "framer-motion";

type RevealProps = {
    children: React.ReactNode;
};

const Reveal = ({ children }: RevealProps) => {

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
            }}
            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;