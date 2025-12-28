"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import GlassCard from "../GlassCard";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon } from "@heroicons/react/24/outline";
import NextImage from "next/image";

const projects = [
    {
        title: "MATCHOP",
        subtitle: "Job Matching Platform",
        description: "A powerful job matching platform connecting companies with candidates. Built as GDSC Lead project with real-time features and smart matching algorithms.",
        tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
        icon: "https://cdn.simpleicons.org/nextdotjs/000000",
        color: "bg-gray-800",
        github: "https://github.com/zied1fatnassi/MATCHOP",
        live: "https://matchop.vercel.app",
        stars: 12,
        role: "GDSC Lead Project",
    },
    {
        title: "mahdia_bg",
        subtitle: "Fully Featured App",
        description: "A comprehensive full-stack application showcasing modern JavaScript development practices and clean architecture.",
        tags: ["JavaScript", "Full Stack", "Modern Web"],
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        color: "bg-gray-700",
        github: "https://github.com/zied1fatnassi/mahdia_bg",
        live: null,
        stars: 0,
        role: "Personal Project",
    },
    {
        title: "Mahdia-Blue-and-Green-Home-Page",
        subtitle: "Magic Patterns Design",
        description: "A beautiful landing page synced from Magic Patterns featuring a stunning blue and green color scheme with modern TypeScript implementation.",
        tags: ["TypeScript", "Magic Patterns", "UI/UX"],
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
        color: "bg-gray-600",
        github: "https://github.com/zied1fatnassi/Mahdia-Blue-and-Green-Home-Page",
        live: null,
        stars: 0,
        role: "Design Project",
    },
    {
        title: "GDSC-ISIMA-Website",
        subtitle: "GDSC Community Platform",
        description: "An interactive website for all the community of Google Developer Student Clubs in Tunisia and around the world.",
        tags: ["JavaScript", "GDSC", "Community"],
        icon: "https://cdn.simpleicons.org/google/4285F4",
        color: "bg-gray-500",
        github: "https://github.com/zied1fatnassi/GDSC-ISIMA-Website",
        live: null,
        stars: 0,
        role: "GDSC Project",
    },
    {
        title: "IoT Smart Device",
        subtitle: "Competition Winner 🏆",
        description: "Award-winning IoT solution built with Arduino and ESP32 for a university competition. Features sensor integration and mobile app control.",
        tags: ["Arduino", "ESP32", "React Native", "IoT"],
        icon: "https://cdn.simpleicons.org/arduino/00979D",
        color: "bg-gray-800",
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
        isEmoji: true,
        color: "bg-gray-700",
        github: "https://github.com",
        live: null,
        stars: 15,
        role: "Freelance",
    },
];

export default function Projects() {
    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6 bg-[#F9FAFB]" delay={0.1}>
            <div id="projects" className="container mx-auto max-w-6xl scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">What I&apos;ve built</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
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
                                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center p-2`}
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                            >
                                                {'isEmoji' in project && project.isEmoji ? (
                                                    <span className="text-2xl">{project.icon}</span>
                                                ) : (
                                                    <NextImage
                                                        src={project.icon}
                                                        alt={project.title}
                                                        width={32}
                                                        height={32}
                                                        className="object-contain"
                                                        unoptimized
                                                    />
                                                )}
                                            </motion.div>
                                            <div>
                                                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                                                <p className="text-sm text-gray-500">{project.subtitle}</p>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex items-center gap-1 text-gray-500">
                                            <StarIcon className="w-4 h-4" />
                                            <span className="text-sm">{project.stars}</span>
                                        </div>
                                    </div>

                                    {/* Role Badge */}
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${project.color} text-white`}>
                                            {project.role}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs bg-gray-50 border border-gray-200 rounded-md text-gray-700"
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
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm text-gray-800"
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
                                                className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg font-medium text-sm text-white"
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
                        href="https://github.com/zied1fatnassi"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-4 glass-card border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors text-gray-800"
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
