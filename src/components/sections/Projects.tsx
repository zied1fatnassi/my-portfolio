"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import GlassCard from "../GlassCard";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const projects = [
    {
        title: "MatchOp",
        description: "A powerful SaaS platform for matching and operations management. Built with Next.js and Supabase for real-time functionality.",
        tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
        image: "🚀",
        color: "from-indigo-500 to-purple-500",
        github: "#",
        live: "#",
    },
    {
        title: "Booktive",
        description: "Interactive e-book platform with video content and AI branding. Features marketplace and user authentication.",
        tags: ["Next.js", "React", "Supabase", "Framer Motion"],
        image: "📚",
        color: "from-purple-500 to-pink-500",
        github: "#",
        live: "#",
    },
    {
        title: "IoT Smart Home",
        description: "Arduino-based smart home system with mobile app control. Includes sensors for temperature, humidity, and motion.",
        tags: ["Arduino", "React Native", "Firebase", "IoT"],
        image: "🏠",
        color: "from-cyan-500 to-blue-500",
        github: "#",
        live: "#",
    },
    {
        title: "GDSC Community App",
        description: "Community management platform for GDSC events, workshops, and member collaboration.",
        tags: ["Next.js", "Supabase", "Tailwind", "PWA"],
        image: "👥",
        color: "from-green-500 to-emerald-500",
        github: "#",
        live: "#",
    },
];

export default function Projects() {
    return (
        <AnimatedSection className="py-32 px-6" delay={0.1}>
            <div id="projects" className="container mx-auto scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-pink-400 text-sm uppercase tracking-widest mb-4">My recent work</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full group relative overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    {/* Project Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl mb-6`}>
                                        {project.image}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                        >
                                            <CodeBracketIcon className="w-5 h-5" />
                                            <span>Code</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg font-medium`}
                                        >
                                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                            <span>Live Demo</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 glass-card border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors"
                    >
                        <span>View All Projects on GitHub</span>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}
