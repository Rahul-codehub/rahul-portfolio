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
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 gradient-text">
                        About Me
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

                        <p className="text-gray-300 text-lg leading-relaxed">

                            I'm Rahul Kumar, an AI Engineer and MERN Stack Developer
                            passionate about building intelligent systems,
                            scalable web applications, and modern AI-powered products.

                            <br />
                            <br />

                            I have experience in AI applications, LLM integrations,
                            automation systems, Next.js, TypeScript, Python,
                            APIs, and Machine Learning to create impactful
                            digital experiences with modern UI/UX.

                        </p>

                    </div>

                </Reveal>

            </div>

        </section>
    );
};

export default About;