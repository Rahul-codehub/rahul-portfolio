"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

const BackToTop = () => {

    const [visible, setVisible] =
        useState(false);

    useEffect(() => {

        const toggleVisibility = () => {

            if (window.scrollY > 200) {

                setVisible(true);

            } else {

                setVisible(false);

            }

        };

        window.addEventListener(
            "scroll",
            toggleVisibility
        );

        return () =>
            window.removeEventListener(
                "scroll",
                toggleVisibility
            );

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    return (

        <button
            onClick={scrollToTop}
            className={`
                fixed
bottom-8
left-1/2
-translate-x-1/2
z-50

w-14
h-14

rounded-full
glass
border border-white/10

flex
items-center
justify-center

hover:scale-110
hover:border-blue-400/30

transition-all duration-300

${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }
            `}
        >

            <ChevronUp size={22} />

        </button>

    );
};

export default BackToTop;