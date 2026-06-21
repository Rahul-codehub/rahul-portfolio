"use client";

import { useEffect, useState } from "react";

const CursorGlow = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {

        const handleMouseMove = (
            e: MouseEvent
        ) => {

            setPosition({
                x: e.clientX,
                y: e.clientY,
            });

        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () =>
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

    }, []);

    return (
        <div
            className="
            pointer-events-none
            fixed
            inset-0
            z-0
            "
        >

            <div
                className="
                absolute
                w-[350px]
                h-[350px]
                rounded-full
                bg-blue-500/20
                blur-[120px]
                transition-all
                duration-100
                "
                style={{
                    left: position.x - 175,
                    top: position.y - 175,
                }}
            />

        </div>
    );
};

export default CursorGlow;