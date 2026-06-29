"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    // { name: "GitHub", href: "#github" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;

            let currentSection = "";

            navLinks.forEach((link) => {
                const section = document.querySelector(link.href);

                if (section) {
                    const top = (section as HTMLElement).offsetTop;
                    const height = (section as HTMLElement).offsetHeight;

                    if (
                        scrollPosition >= top &&
                        scrollPosition < top + height
                    ) {
                        currentSection = link.href.substring(1);
                    }
                }
            });

            setActive(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10">

            <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#"
                    className="text-3xl font-bold gradient-text"
                >
                    Rahul Kumar
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">

                    {navLinks.map((link) => {

                        const isActive =
                            active === link.href.substring(1);

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`
                                transition-all duration-300
                                ${isActive
                                        ? "text-blue-400"
                                        : "text-gray-300 hover:text-white"
                                    }
                                `}
                            >
                                {link.name}
                            </a>
                        );
                    })}

                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3 }}
                        className="
                        md:hidden
                        bg-black/95
                        backdrop-blur-xl
                        border-t border-white/10
                        "
                    >

                        <nav className="flex flex-col items-center py-8 gap-8">

                            {navLinks.map((link) => {

                                const isActive =
                                    active ===
                                    link.href.substring(1);

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() =>
                                            setOpen(false)
                                        }
                                        className={`
                                        text-lg transition-all duration-300
                                        ${isActive
                                                ? "text-blue-400"
                                                : "text-gray-300 hover:text-white"
                                            }
                                        `}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}

                        </nav>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
};

export default Navbar;