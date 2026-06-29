"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage?: string;
    language: string;
    stargazers_count: number;
    topics?: string[];
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const [repos, setRepos] = useState<Repo[]>([]);
    const [selectedProject, setSelectedProject] =
        useState<Repo | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {

            try {

                const res = await fetch("/api/github");

                const data = await res.json();

                // Repositories I don't want to show
                const hiddenRepos = [
                    "rahul-portfolio",
                ];

                const filteredRepos = data.filter(
                    (repo: Repo) =>
                        !hiddenRepos.includes(repo.name.toLowerCase())
                );

                setRepos(filteredRepos);

            } catch (error) {

                console.error("Failed to fetch repos:", error);

            }

        };

        fetchRepos();
    }, []);

    return (
        <section
            id="projects"
            className="py-16 md:py-20"
        >
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
                >
                    GitHub Projects
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {(showAll ? repos : repos.slice(0, 3)).map(
                        (repo, index) => (

                            <motion.div
                                key={repo.id}
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
                                onClick={() =>
                                    setSelectedProject(repo)
                                }
                                className="
                                    group
                                    glass
                                    rounded-3xl
                                    p-6
                                    border
                                    border-transparent
                                    hover:border-blue-400/30
                                    hover:-translate-y-3
                                    transition-all
                                    duration-500
                                    cursor-pointer
                                    overflow-hidden
                                "
                            >
                                {/* Title */}
                                <div className="flex items-center justify-between mb-4">

                                    <h3 className="text-2xl font-semibold capitalize group-hover:text-blue-400 transition-colors">

                                        {repo.name}

                                    </h3>

                                </div>

                                {/* Description */}
                                <p
                                    className="
                                        text-gray-400
                                        leading-relaxed
                                        mb-6
                                        min-h-[96px]
                                    "
                                >
                                    {repo.description ||
                                        "No description available."}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between">

                                    <span
                                        className="
                                            px-4
                                            py-2
                                            rounded-full
                                            text-sm
                                            bg-white/10
                                            border
                                            border-white/10
                                        "
                                    >
                                        {repo.language || "Code"}
                                    </span>

                                    <span
                                        className="
                                            text-blue-400
                                            group-hover:translate-x-1
                                            transition-transform
                                        "
                                    >
                                        View Details →
                                    </span>

                                </div>

                            </motion.div>
                        )
                    )}

                </div>

                {/* View More Button */}
                {repos.length > 3 && (

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
                                    View All Projects
                                    <ChevronDown size={18} />
                                </>
                            )}

                        </button>

                    </div>

                )}

                {/* Modal */}
                <ProjectModal
                    project={selectedProject}
                    onClose={() =>
                        setSelectedProject(null)
                    }
                />

            </div>
        </section>
    );
};

export default Projects;