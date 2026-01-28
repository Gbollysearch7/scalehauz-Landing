"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterAnimationProps {
    value: string;
    label: string;
    duration?: number;
}

export const CounterAnimation = ({ value, label, duration = 2 }: CounterAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState("0");

    // Extract number and suffix (e.g., "340%" -> 340 and "%")
    const numericMatch = value.match(/^([\d.]+)(.*)$/);
    const targetNumber = numericMatch ? parseFloat(numericMatch[1]) : 0;
    const suffix = numericMatch ? numericMatch[2] : "";
    const prefix = value.match(/^([^\d]+)/)?.[1] || "";

    useEffect(() => {
        if (!isInView) return;

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = targetNumber * easeOut;

            // Format based on whether it's a decimal or integer
            if (targetNumber % 1 !== 0) {
                setDisplayValue(current.toFixed(1));
            } else {
                setDisplayValue(Math.floor(current).toString());
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(targetNumber.toString());
            }
        };

        animate();
    }, [isInView, targetNumber, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                {prefix}{displayValue}{suffix}
            </div>
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white/40">
                {label}
            </div>
        </motion.div>
    );
};
