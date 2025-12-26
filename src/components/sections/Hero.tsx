"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        rotate: 360,
                        y: [0, -30, 0]
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        y: [0, 30, 0]
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/4 w-4 h-4 bg-indigo-500 rounded-full opacity-60"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full opacity-60"
                />
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-60"
                />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p
                        className="text-indigo-400 text-lg mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        👋 Hello, I&apos;m
                    </motion.p>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">Zied</span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-4xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Full-Stack Developer & <span className="text-purple-400">GDSC Leader</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        A 21-year-old passionate developer from Ksar Hellal, Tunisia 🇹🇳
                        <br />
                        Building the future with Next.js, React, Supabase & Arduino
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 glass-card border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                    >
                        <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
