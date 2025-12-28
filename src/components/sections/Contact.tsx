"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import AnimatedSection from "../AnimatedSection";
import GlassCard from "../GlassCard";
import {
    EnvelopeIcon,
    MapPinIcon,
    PaperAirplaneIcon,
    CheckCircleIcon,
    ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import NextImage from "next/image";

const socialLinks = [
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/000000", url: "https://github.com/zied1fatnassi" },
    { name: "LinkedIn", icon: "/linkedin.svg", url: "https://linkedin.com/in/yourprofile" },
];

const languages = [
    { name: "Arabic", level: "Native", flag: "🇹🇳" },
    { name: "French", level: "C1", flag: "🇫🇷" },
    { name: "English", level: "C1", flag: "🇬🇧" },
];

const interests = [
    { name: "Dance", icon: "💃" },
    { name: "Theater", icon: "🎭" },
    { name: "Circus", icon: "🎪" },
    { name: "Hiking", icon: "🥾" },
    { name: "Volunteering", icon: "🤝" },
];

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const { submitContactMessage } = await import('@/lib/database');

            await submitContactMessage({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            });

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6 relative bg-[#FAFAFA]" delay={0.1}>
            {/* Background decoration - Neutral */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gray-200/30 rounded-full blur-3xl" />
            </div>

            <div id="contact" className="container mx-auto max-w-5xl relative z-10 scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Get in touch</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                        Have a project in mind? Need an AI agent or website? Let&apos;s build something amazing together!
                    </p>
                </motion.div>

                {/* Freelance CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="glass-card-strong p-6 md:p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">
                            🚀 Build your AI agent or website?
                        </h3>
                        <p className="text-gray-600 mb-4">Available for freelance projects and collaborations</p>
                        <motion.a
                            href="mailto:your.email@example.com"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black rounded-full font-semibold text-white shadow-lg"
                        >
                            <EnvelopeIcon className="w-5 h-5" />
                            Let&apos;s Talk
                        </motion.a>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors text-gray-800 placeholder-gray-400"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors text-gray-800 placeholder-gray-400"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors text-gray-800 placeholder-gray-400"
                                        placeholder="Project inquiry"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors resize-none text-gray-800 placeholder-gray-400"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={status === "sending"}
                                    whileHover={{ scale: status !== "sending" ? 1.02 : 1 }}
                                    whileTap={{ scale: status !== "sending" ? 0.98 : 1 }}
                                    className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${status === "success"
                                        ? "bg-gray-600"
                                        : status === "error"
                                            ? "bg-gray-800"
                                            : "bg-black hover:bg-gray-900 hover:shadow-xl"
                                        }`}
                                >
                                    {status === "sending" && (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    )}
                                    {status === "success" && (
                                        <>
                                            <CheckCircleIcon className="w-5 h-5" />
                                            Message Sent!
                                        </>
                                    )}
                                    {status === "error" && (
                                        <>
                                            <ExclamationCircleIcon className="w-5 h-5" />
                                            Error. Try again.
                                        </>
                                    )}
                                    {status === "idle" && (
                                        <>
                                            <PaperAirplaneIcon className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                    >
                        {/* Location */}
                        <GlassCard className="flex items-center gap-4">
                            <div className="p-3 bg-gray-100 rounded-xl">
                                <MapPinIcon className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Location</p>
                                <p className="text-lg font-medium text-black">Ksar Hellal, Tunisia 🇹🇳</p>
                            </div>
                        </GlassCard>

                        {/* Social Links */}
                        <GlassCard>
                            <h4 className="text-lg font-semibold mb-4 text-black">Connect with me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 py-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="w-5 h-5 relative">
                                            <NextImage
                                                src={social.icon}
                                                alt={social.name}
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-sm text-gray-800">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Languages */}
                        <GlassCard>
                            <h4 className="text-lg font-semibold mb-4 text-black">Languages</h4>
                            <div className="flex flex-wrap gap-3">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.name}
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                                    >
                                        <span>{lang.flag}</span>
                                        <span className="text-sm text-gray-700">{lang.name}</span>
                                        <span className="text-xs text-gray-500">({lang.level})</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-8 border-t border-gray-200"
                >
                    {/* Interests */}
                    <div className="text-center mb-8">
                        <p className="text-sm text-gray-500 mb-4">Beyond coding, I enjoy</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {interests.map((interest) => (
                                <motion.span
                                    key={interest.name}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 flex items-center gap-1.5 cursor-default"
                                >
                                    <span>{interest.icon}</span>
                                    {interest.name}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-gray-500 text-sm">
                        <p>
                            © 2025 Built with ❤️ using{" "}
                            <span className="text-gray-700">Next.js</span>,{" "}
                            <span className="text-gray-700">Tailwind</span> &{" "}
                            <span className="text-gray-700">Framer Motion</span>
                        </p>
                    </div>
                </motion.footer>
            </div>
        </AnimatedSection>
    );
}
