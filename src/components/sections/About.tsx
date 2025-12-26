"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import GlassCard from "../GlassCard";
import { MapPinIcon, AcademicCapIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const highlights = [
    {
        icon: MapPinIcon,
        title: "Ksar Hellal, Tunisia",
        description: "Proudly representing Tunisian tech talent 🇹🇳",
    },
    {
        icon: AcademicCapIcon,
        title: "GDSC Leader",
        description: "Leading and empowering the next generation of developers",
    },
    {
        icon: RocketLaunchIcon,
        title: "SaaS Startup Vision",
        description: "Building innovative solutions for real-world problems",
    },
];

export default function About() {
    return (
        <AnimatedSection className="py-32 px-6" delay={0.1}>
            <div id="about" className="container mx-auto scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm uppercase tracking-widest mb-4">Get to know me</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard className="relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 flex items-center justify-center text-4xl">
                                    👨‍💻
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    Hey there! I&apos;m <span className="gradient-text">Zied</span>
                                </h3>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    A 21-year-old passionate developer from the beautiful town of <span className="text-purple-400">Ksar Hellal, Tunisia</span>.
                                    I&apos;m the proud leader of my local GDSC chapter, where I help fellow developers grow their skills and build amazing projects.
                                </p>

                                <p className="text-gray-300 leading-relaxed">
                                    My journey in tech started with curiosity and evolved into a burning passion for creating impactful software.
                                    I specialize in <span className="text-indigo-400">Next.js</span>, <span className="text-indigo-400">React</span>, and <span className="text-indigo-400">Supabase</span>,
                                    but I also love tinkering with <span className="text-green-400">Arduino</span> for IoT projects.
                                    My ultimate dream? Building a <span className="text-pink-400">SaaS startup</span> that makes a real difference.
                                </p>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Highlights */}
                    <div className="space-y-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <GlassCard className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl">
                                        <item.icon className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
