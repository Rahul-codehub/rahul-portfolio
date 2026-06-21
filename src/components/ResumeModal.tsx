"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const ResumeModal = ({
    isOpen,
    onClose,
}: Props) => {

    return (
        <AnimatePresence>

            {isOpen && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="
                    fixed inset-0
                    z-[100]
                    bg-black/80
                    backdrop-blur-md
                    flex items-center justify-center
                    p-4
                    "
                >

                    <motion.div
                        initial={{
                            scale: 0.9,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0.9,
                            opacity: 0,
                        }}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        className="
                        bg-black
                        border border-white/10
                        rounded-3xl
                        w-full
                        max-w-5xl
                        h-[90vh]
                        overflow-hidden
                        relative
                        "
                    >

                        <button
                            onClick={onClose}
                            className="
                            absolute
                            top-4
                            right-4
                            z-10
                            text-2xl
                            text-white
                            "
                        >
                            ×
                        </button>

                        <iframe
                            src="/resume.pdf"
                            className="
                            w-full
                            h-full
                            "
                        />

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
};

export default ResumeModal;