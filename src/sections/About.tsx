"use client";

import Reveal from "@/components/Reveal";

const About = () => {
    return (
        <section
            id="about"
            className="py-16 md:py-20"
        >

            <div className="max-w-6xl mx-auto px-4">

                <Reveal>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
                        About Rahul
                    </h2>

                    {/* Content Card */}
                    <div
                        className="
                        glass
                        rounded-3xl
                        p-8 md:p-10
                        border border-white/10
                        "
                    >

                        <div className="text-gray-300 text-lg leading-relaxed text-justify">
                            <p>
                                I am Rahul Kumar, a B.Tech Computer Science and Engineering student at COER University, graduating in 2027. I specialize in AI Engineering and Full Stack Development, with a strong focus on Large Language Models (LLMs), intelligent automation, and modern web technologies.
                            </p>

                            <p>
                                My technical expertise includes Next.js, React, Node.js, MongoDB, Python, LangChain, Groq API, and AI-powered application development. I enjoy building scalable web platforms, AI chatbots, retrieval-augmented generation (RAG) systems, and intelligent solutions that solve real-world problems. My goal is to become an AI Engineer specializing in LLMs, AI Agents, and intelligent automation while creating impactful products that combine artificial intelligence with exceptional user experiences.
                            </p>

                        </div>
                    </div>

                </Reveal>

            </div>

        </section>
    );
};

export default About;