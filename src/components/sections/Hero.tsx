"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import NextImage from "next/image";

// Typewriter hook
function useTypewriter(text: string, speed: number = 50, delay: number = 1000) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let index = 0;

        const startTyping = () => {
            timeout = setTimeout(function type() {
                if (index < text.length) {
                    setDisplayText(text.slice(0, index + 1));
                    index++;
                    timeout = setTimeout(type, speed);
                } else {
                    setIsComplete(true);
                }
            }, speed);
        };

        const initialDelay = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(timeout);
            clearTimeout(initialDelay);
        };
    }, [text, speed, delay]);

    return { displayText, isComplete };
}

const badges = [
    { label: "� Public Speaker & Communicator", color: "from-sky-blue-light/20 to-cerulean/20", border: "border-sky-blue-light/30" },
    { label: "💻 Web Dev Since 13", color: "from-cerulean/20 to-steel-blue/20", border: "border-cerulean/30" },
];

export default function Hero() {
    const tagline = "Autonomous Tunisian Builder | GDSC Leader | AI Agents & Web Apps";
    const { displayText, isComplete } = useTypewriter(tagline, 40, 1200);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Floating orbs background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -30, 0], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-cerulean/10 to-steel-blue/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-10 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-air-force-blue/15 to-sky-blue-light/15 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-20">
                {/* Main Hero Card - Glassmorphic */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-card-strong p-6 sm:p-10 md:p-14 max-w-3xl mx-auto text-center relative overflow-hidden"
                >
                    {/* Subtle gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cerulean/50 to-transparent" />

                    {/* Profile Picture */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                        className="mx-auto mb-6 sm:mb-8"
                    >
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cerulean via-air-force-blue to-sky-blue-light p-1 mx-auto">
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                                <NextImage
                                    src="/profile.jpeg"
                                    alt="Profile Picture"
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover"
                                    priority
                                    quality={95}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
                    >
                        <span className="gradient-text">YOUR NAME</span>
                    </motion.h1>

                    {/* Typewriter Tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="min-h-[60px] sm:min-h-[48px] mb-6 sm:mb-8"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light">
                            {displayText}
                            {!isComplete && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-0.5 h-5 sm:h-6 bg-sky-blue-light ml-1 align-middle"
                                />
                            )}
                        </p>
                    </motion.div>

                    {/* Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-10"
                    >
                        {badges.map((badge, index) => (
                            <motion.div
                                key={badge.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.7 + index * 0.15 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} border ${badge.border} backdrop-blur-sm`}
                            >
                                <span className="text-sm sm:text-base text-white/90">{badge.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cerulean to-air-force-blue rounded-full font-semibold text-white shadow-lg shadow-cerulean/25 hover:shadow-xl hover:shadow-cerulean/30 transition-all text-sm sm:text-base"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all text-sm sm:text-base"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll Down Arrow */}
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                            Scroll
                        </span>
                        <ChevronDownIcon className="w-5 h-5 text-gray-500 group-hover:text-cerulean transition-colors" />
                    </motion.div>
                </motion.a>
            </div>
        </section>
    );
}
