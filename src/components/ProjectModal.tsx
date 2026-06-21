"use client";

import { motion, AnimatePresence } from "framer-motion";

import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

type Props = {
    project: any;
    onClose: () => void;
};

const ProjectModal = ({
    project,
    onClose,
}: Props) => {

    return (

        <AnimatePresence>

            {project && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="
                    fixed inset-0
                    z-[100]
                    bg-black/70
                    backdrop-blur-md
                    flex items-center justify-center
                    p-4
                    "
                >

                    <motion.div
                        initial={{
                            scale: 0.9,
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            scale: 0.9,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        className="
                        glass
                        border border-white/10
                        rounded-3xl
                        max-w-2xl
                        w-full
                        p-8
                        relative
                        "
                    >

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="
                            absolute top-5 right-5
                            text-2xl
                            text-gray-400
                            hover:text-white
                            "
                        >
                            ×
                        </button>

                        {/* Title */}
                        <h2 className="text-3xl font-bold gradient-text mb-4">
                            {project.name}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-8">
                            {project.description ||
                                "No description available."}
                        </p>

                        {/* Tech Stack */}
                        {project.topics?.length > 0 && (

                            <div className="flex flex-wrap gap-3 mb-8">

                                {project.topics.map(
                                    (topic: string) => (

                                        <span
                                            key={topic}
                                            className="
                                            px-4 py-2
                                            rounded-full
                                            bg-blue-500/10
                                            border border-blue-500/20
                                            text-blue-300
                                            text-sm
                                            "
                                        >
                                            {topic}
                                        </span>

                                    )
                                )}

                            </div>

                        )}

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">

                            <a
                                href={project.html_url}
                                target="_blank"
                                className="
                                px-6 py-3
                                rounded-2xl
                                bg-blue-500
                                hover:bg-blue-600
                                transition-all
                                flex items-center gap-2
                                "
                            >
                                <FaGithub />
                                GitHub
                            </a>

                            {project.homepage && (

                                <a
                                    href={project.homepage}
                                    target="_blank"
                                    className="
                                    px-6 py-3
                                    rounded-2xl
                                    border border-white/10
                                    hover:bg-white/10
                                    transition-all
                                    flex items-center gap-2
                                    "
                                >
                                    <FaExternalLinkAlt />
                                    Live Demo
                                </a>

                            )}

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );
};

export default ProjectModal;