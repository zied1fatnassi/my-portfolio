"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import NextImage from "next/image";

const skillCategories = [
    {
        name: "Frontend",
        color: "bg-gray-800",
        barColor: "from-gray-600 to-gray-800",
        skills: [
            { name: "Next.js", level: 95, icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "React", level: 92, icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Tailwind CSS", level: 90, icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "JavaScript", level: 88, icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        ],
    },
    {
        name: "Backend",
        color: "bg-gray-700",
        barColor: "from-gray-500 to-gray-700",
        skills: [
            { name: "Node.js", level: 85, icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Supabase", level: 88, icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
            { name: "Symfony", level: 75, icon: "https://cdn.simpleicons.org/symfony/000000" },
            { name: "SQL", level: 82, icon: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "Python", level: 78, icon: "https://cdn.simpleicons.org/python/3776AB" },
        ],
    },
    {
        name: "Hardware & IoT",
        color: "bg-gray-600",
        barColor: "from-gray-400 to-gray-600",
        skills: [
            { name: "Arduino", level: 88, icon: "https://cdn.simpleicons.org/arduino/00979D" },
            { name: "ESP32", level: 85, icon: "https://cdn.simpleicons.org/espressif/E7352C" },
        ],
    },
    {
        name: "AI & Tools",
        color: "bg-gray-500",
        barColor: "from-gray-300 to-gray-500",
        skills: [
            { name: "AI Agents", level: 82, icon: "🤖", isEmoji: true },
            { name: "n8n", level: 80, icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
            { name: "Git", level: 88, icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "Vercel", level: 90, icon: "https://cdn.simpleicons.org/vercel/000000" },
        ],
    },
];

export default function Skills() {
    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6 relative bg-[#FAFAFA]" delay={0.1}>
            {/* Background decoration - Neutral */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-72 md:w-96 h-72 md:h-96 bg-gray-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-gray-100/50 rounded-full blur-3xl" />
            </div>

            <div id="skills" className="container mx-auto max-w-6xl relative z-10 scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">My expertise</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                </motion.div>

                {/* Skills Grid by Category */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="glass-card p-6"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                                <h3 className="font-semibold text-lg text-black">{category.name}</h3>
                            </div>

                            {/* Skills */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                        className="group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <motion.div
                                                    className="w-6 h-6 relative flex items-center justify-center"
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    {'isEmoji' in skill && skill.isEmoji ? (
                                                        <span className="text-xl">{skill.icon}</span>
                                                    ) : (
                                                        <NextImage
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            width={24}
                                                            height={24}
                                                            className="object-contain"
                                                            unoptimized
                                                        />
                                                    )}
                                                </motion.div>
                                                <span className="text-gray-800 text-sm font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">{skill.level}%</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                                                className={`h-full bg-gradient-to-r ${category.barColor} rounded-full group-hover:shadow-sm transition-shadow`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Tech Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 glass-card p-6 md:p-8"
                >
                    <h3 className="text-lg font-semibold mb-6 text-center text-black">Quick Stack Overview</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-default"
                            >
                                <div className="w-5 h-5 relative flex items-center justify-center">
                                    {'isEmoji' in skill && skill.isEmoji ? (
                                        <span className="text-lg">{skill.icon}</span>
                                    ) : (
                                        <NextImage
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                            unoptimized
                                        />
                                    )}
                                </div>
                                <span className="text-sm text-gray-700">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}
