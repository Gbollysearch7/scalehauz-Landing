"use client";

import { motion } from "framer-motion";

const clients = [
    { name: "TechFlow", initial: "TF" },
    { name: "Vertex", initial: "VX" },
    { name: "CloudSync", initial: "CS" },
    { name: "DataPrime", initial: "DP" },
    { name: "NexGen", initial: "NG" },
    { name: "Quantum", initial: "QT" },
    { name: "Synapse", initial: "SY" },
    { name: "Horizon", initial: "HZ" },
];

export const LogoMarquee = () => {
    return (
        <div className="relative overflow-hidden py-8">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-12 items-center"
                animate={{ x: [0, -800] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {[...clients, ...clients, ...clients].map((client, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group"
                    >
                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                            <span className="font-mono text-xs text-white/60 group-hover:text-white transition-colors">
                                {client.initial}
                            </span>
                        </div>
                        <span className="font-mono text-sm uppercase tracking-wider text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                            {client.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
