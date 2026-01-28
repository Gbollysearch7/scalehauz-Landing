"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
}

export const Reveal = ({ children, width = "100%", className = "", delay = 0.25 }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                {children}
            </motion.div>
        </div>
    );
};
