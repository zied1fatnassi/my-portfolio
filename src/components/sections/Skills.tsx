"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const skills = [
    { name: "Next.js", level: 95, color: "from-gray-500 to-white" },
    { name: "React", level: 92, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 88, color: "from-blue-400 to-blue-600" },
    { name: "Supabase", level: 85, color: "from-green-400 to-emerald-500" },
    { name: "Node.js", level: 82, color: "from-green-500 to-lime-500" },
    { name: "Arduino", level: 78, color: "from-teal-400 to-cyan-500" },
    { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-blue-500" },
    { name: "PostgreSQL", level: 80, color: "from-blue-500 to-indigo-500" },
];

const technologies = [
    { name: "Next.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Supabase", icon: "🗄️" },
    { name: "Arduino", icon: "🔌" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Git", icon: "📚" },
    { name: "Docker", icon: "🐳" },
    { name: "Vercel", icon: "▲" },
    { name: "Figma", icon: "🎯" },
    { name: "VS Code", icon: "💻" },
];

export default function Skills() {
    return (
        <AnimatedSection className="py-32 px-6 relative" delay={0.1}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div id="skills" className="container mx-auto relative z-10 scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">What I work with</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                </motion.div>

                {/* Skill Bars */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="glass-card p-6"
                        >
                            <div className="flex justify-between mb-3">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-colors cursor-default"
                            >
                                <div className="text-3xl mb-2">{tech.icon}</div>
                                <p className="text-sm text-gray-300">{tech.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}
