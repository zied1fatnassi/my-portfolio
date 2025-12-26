"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const skillCategories = [
    {
        name: "Frontend",
        color: "from-cyan-500 to-blue-500",
        skills: [
            { name: "Next.js", level: 95, icon: "⚡" },
            { name: "React", level: 92, icon: "⚛️" },
            { name: "Tailwind CSS", level: 90, icon: "🎨" },
            { name: "JavaScript", level: 88, icon: "📜" },
        ],
    },
    {
        name: "Backend",
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "Node.js", level: 85, icon: "🟢" },
            { name: "Supabase", level: 88, icon: "🗄️" },
            { name: "Symfony", level: 75, icon: "🎵" },
            { name: "SQL", level: 82, icon: "💾" },
            { name: "Python", level: 78, icon: "🐍" },
        ],
    },
    {
        name: "Hardware & IoT",
        color: "from-amber-500 to-orange-500",
        skills: [
            { name: "Arduino", level: 88, icon: "🔌" },
            { name: "ESP32", level: 85, icon: "📡" },
        ],
    },
    {
        name: "AI & Tools",
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "AI Agents", level: 82, icon: "🤖" },
            { name: "n8n", level: 80, icon: "⚙️" },
            { name: "Git", level: 88, icon: "📚" },
            { name: "Vercel", level: 90, icon: "▲" },
        ],
    },
];

export default function Skills() {
    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6 relative" delay={0.1}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div id="skills" className="container mx-auto max-w-6xl relative z-10 scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">My expertise</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
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
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                                <h3 className="font-semibold text-lg">{category.name}</h3>
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
                                                <motion.span
                                                    className="text-xl"
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    {skill.icon}
                                                </motion.span>
                                                <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-gray-400 text-xs">{skill.level}%</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full group-hover:shadow-lg group-hover:shadow-${category.color.split('-')[1]}-500/20 transition-shadow`}
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
                    <h3 className="text-lg font-semibold mb-6 text-center">Quick Stack Overview</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="px-4 py-2 bg-white/5 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default"
                            >
                                <span className="text-lg">{skill.icon}</span>
                                <span className="text-sm text-gray-300">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}
