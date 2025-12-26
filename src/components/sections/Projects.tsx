"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import GlassCard from "../GlassCard";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon } from "@heroicons/react/24/outline";

const projects = [
    {
        title: "MatchOp",
        subtitle: "Job Matching Platform",
        description: "A powerful job matching platform connecting companies with candidates. Built as GDSC Lead project with real-time features and smart matching algorithms.",
        tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
        icon: "🎯",
        color: "from-indigo-500 to-purple-500",
        github: "https://github.com",
        live: "https://matchop.vercel.app",
        stars: 12,
        role: "GDSC Lead Project",
    },
    {
        title: "IoT Smart Device",
        subtitle: "Competition Winner 🏆",
        description: "Award-winning IoT solution built with Arduino and ESP32 for a university competition. Features sensor integration and mobile app control.",
        tags: ["Arduino", "ESP32", "React Native", "IoT"],
        icon: "🔌",
        color: "from-amber-500 to-orange-500",
        github: "https://github.com",
        live: null,
        stars: 8,
        role: "University Competition",
    },
    {
        title: "AI Agents & Chatbots",
        subtitle: "Freelance Projects",
        description: "Custom AI agents and chatbots built for freelance clients. Automated workflows using n8n, intelligent conversation flows, and business process automation.",
        tags: ["AI Agents", "n8n", "Python", "Automation"],
        icon: "🤖",
        color: "from-purple-500 to-pink-500",
        github: "https://github.com",
        live: null,
        stars: 15,
        role: "Freelance",
    },
    {
        title: "Farha",
        subtitle: "Event Manager",
        description: "Event coordination platform for Djerba events. Streamlines event planning, vendor management, and guest coordination for seamless celebrations.",
        tags: ["Next.js", "Supabase", "Tailwind", "PWA"],
        icon: "🎉",
        color: "from-rose-500 to-pink-500",
        github: "https://github.com",
        live: null,
        stars: 6,
        role: "Personal Project",
    },
];

export default function Projects() {
    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6" delay={0.1}>
            <div id="projects" className="container mx-auto max-w-6xl scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-pink-400 text-sm uppercase tracking-widest mb-4">What I&apos;ve built</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full group relative overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                            >
                                                {project.icon}
                                            </motion.div>
                                            <div>
                                                <h3 className="text-xl font-bold">{project.title}</h3>
                                                <p className="text-sm text-gray-400">{project.subtitle}</p>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <StarIcon className="w-4 h-4" />
                                            <span className="text-sm">{project.stars}</span>
                                        </div>
                                    </div>

                                    {/* Role Badge */}
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-white/80`}>
                                            {project.role}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm"
                                        >
                                            <CodeBracketIcon className="w-4 h-4" />
                                            <span>Code</span>
                                        </motion.a>
                                        {project.live && (
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg font-medium text-sm`}
                                            >
                                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                                <span>Live</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects CTA */}
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
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-4 glass-card border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors"
                    >
                        <CodeBracketIcon className="w-5 h-5" />
                        <span>View All Projects on GitHub</span>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}
