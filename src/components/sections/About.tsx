"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { AcademicCapIcon, CodeBracketIcon, SparklesIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";

const education = [
    {
        year: "2024",
        title: "Bachelor in Business Intelligence",
        description: "Power BI, Data Analytics, Business Strategy",
        icon: SparklesIcon,
        color: "from-indigo-500 to-purple-500",
    },
    {
        year: "2021",
        title: "Baccalaureate Economics & Management",
        description: "Foundation in economics, management, and strategic thinking",
        icon: AcademicCapIcon,
        color: "from-emerald-500 to-teal-500",
    },
    {
        year: "Age 13",
        title: "Web Development Diploma",
        description: "HTML, CSS, JavaScript, Symfony - Self-taught early start",
        icon: CodeBracketIcon,
        color: "from-amber-500 to-orange-500",
    },
    {
        year: "5 Years",
        title: "Theater Diploma",
        description: "Performance, creativity, and public speaking mastery",
        icon: SparklesIcon,
        color: "from-pink-500 to-rose-500",
    },
];

const personality = {
    type: "ISTP",
    traits: ["Autonomous", "Strategic", "Reflective"],
    learning: "Learns by doing & listening",
};

export default function About() {
    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6" delay={0.1}>
            <div id="about" className="container mx-auto max-w-5xl scroll-mt-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-indigo-400 text-sm uppercase tracking-widest mb-4">Who I am</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Left: Personality & Location */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Location Card */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-lg">
                                    <MapPinIcon className="w-5 h-5 text-red-400" />
                                </div>
                                <h3 className="font-semibold text-lg">Location</h3>
                            </div>
                            <p className="text-gray-300 text-lg">
                                Ksar Hellal, Tunisia 🇹🇳
                            </p>
                        </div>

                        {/* Personality Card */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg">
                                    <UserIcon className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="font-semibold text-lg">Personality</h3>
                            </div>

                            {/* ISTP Badge */}
                            <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full mb-4">
                                <span className="text-indigo-300 font-semibold">{personality.type}</span>
                            </div>

                            {/* Traits */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {personality.traits.map((trait) => (
                                    <span
                                        key={trait}
                                        className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-400 text-sm italic">
                                &quot;{personality.learning}&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card p-6 md:p-8">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <AcademicCapIcon className="w-6 h-6 text-indigo-400" />
                                Education Journey
                            </h3>

                            <div className="space-y-6">
                                {education.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-8 pb-6 last:pb-0 border-l-2 border-white/10 last:border-transparent"
                                    >
                                        {/* Timeline dot */}
                                        <motion.div
                                            className={`absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}
                                            whileHover={{ scale: 1.3 }}
                                        />

                                        {/* Year badge */}
                                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded bg-gradient-to-r ${item.color} bg-opacity-20 text-white mb-2`}>
                                            {item.year}
                                        </span>

                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}
