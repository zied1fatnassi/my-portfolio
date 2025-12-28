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
        color: "bg-gray-800",
    },
    {
        year: "2021",
        title: "Baccalaureate Economics & Management",
        description: "Foundation in economics, management, and strategic thinking",
        icon: AcademicCapIcon,
        color: "bg-gray-700",
    },
    {
        year: "Age 13",
        title: "Web Development Diploma",
        description: "HTML, CSS, JavaScript, Symfony - Self-taught early start",
        icon: CodeBracketIcon,
        color: "bg-gray-600",
    },
    {
        year: "5 Years",
        title: "Theater Diploma",
        description: "Performance, creativity, and public speaking mastery",
        icon: SparklesIcon,
        color: "bg-gray-500",
    },
];

const personality = {
    type: "ISTP",
    traits: ["Autonomous", "Strategic", "Reflective"],
    learning: "Learns by doing & listening",
};

export default function About() {
    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6 bg-[#F9FAFB]" delay={0.1}>
            <div id="about" className="container mx-auto max-w-5xl scroll-mt-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Who I am</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
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
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <MapPinIcon className="w-5 h-5 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lg text-black">Location</h3>
                            </div>
                            <p className="text-gray-700 text-lg">
                                Ksar Hellal, Tunisia 🇹🇳
                            </p>
                        </div>

                        {/* Personality Card */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <UserIcon className="w-5 h-5 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lg text-black">Personality</h3>
                            </div>

                            {/* ISTP Badge */}
                            <div className="inline-block px-3 py-1 bg-gray-100 border border-gray-200 rounded-full mb-4">
                                <span className="text-gray-800 font-semibold">{personality.type}</span>
                            </div>

                            {/* Traits */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {personality.traits.map((trait) => (
                                    <span
                                        key={trait}
                                        className="px-3 py-1 text-sm bg-gray-50 border border-gray-200 rounded-full text-gray-700"
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-500 text-sm italic">
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
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-black">
                                <AcademicCapIcon className="w-6 h-6 text-gray-600" />
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
                                        className="relative pl-8 pb-6 last:pb-0 border-l-2 border-gray-200 last:border-transparent"
                                    >
                                        {/* Timeline dot */}
                                        <motion.div
                                            className={`absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full ${item.color}`}
                                            whileHover={{ scale: 1.3 }}
                                        />

                                        {/* Year badge */}
                                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${item.color} text-white mb-2`}>
                                            {item.year}
                                        </span>

                                        <h4 className="font-semibold text-black mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
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
