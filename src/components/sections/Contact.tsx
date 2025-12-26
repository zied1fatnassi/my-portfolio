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

const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
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

        // EmailJS integration - user needs to add their credentials
        try {
            // For now, simulate success - user will configure EmailJS
            await new Promise(resolve => setTimeout(resolve, 1000));

            /* 
            // Uncomment and configure with your EmailJS credentials:
            import emailjs from '@emailjs/browser';
            await emailjs.sendForm(
              'YOUR_SERVICE_ID',
              'YOUR_TEMPLATE_ID',
              formRef.current!,
              'YOUR_PUBLIC_KEY'
            );
            */

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <AnimatedSection className="py-24 md:py-32 px-4 sm:px-6 relative" delay={0.1}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl" />
            </div>

            <div id="contact" className="container mx-auto max-w-5xl relative z-10 scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-indigo-400 text-sm uppercase tracking-widest mb-4">Get in touch</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
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
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            🚀 Build your AI agent or website?
                        </h3>
                        <p className="text-gray-400 mb-4">Available for freelance projects and collaborations</p>
                        <motion.a
                            href="mailto:your.email@example.com"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-white shadow-lg"
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
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-gray-500"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-gray-500"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-gray-500"
                                        placeholder="Project inquiry"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors resize-none text-white placeholder-gray-500"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={status === "sending"}
                                    whileHover={{ scale: status !== "sending" ? 1.02 : 1 }}
                                    whileTap={{ scale: status !== "sending" ? 0.98 : 1 }}
                                    className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${status === "success"
                                            ? "bg-green-500"
                                            : status === "error"
                                                ? "bg-red-500"
                                                : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-xl"
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
                            <div className="p-3 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-xl">
                                <MapPinIcon className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-lg font-medium">Ksar Hellal, Tunisia 🇹🇳</p>
                            </div>
                        </GlassCard>

                        {/* Social Links */}
                        <GlassCard>
                            <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                                    >
                                        <span className="text-xl">{social.icon}</span>
                                        <span className="text-sm">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Languages */}
                        <GlassCard>
                            <h4 className="text-lg font-semibold mb-4">Languages</h4>
                            <div className="flex flex-wrap gap-3">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.name}
                                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg"
                                    >
                                        <span>{lang.flag}</span>
                                        <span className="text-sm text-gray-300">{lang.name}</span>
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
                    className="mt-20 pt-8 border-t border-white/10"
                >
                    {/* Interests */}
                    <div className="text-center mb-8">
                        <p className="text-sm text-gray-500 mb-4">Beyond coding, I enjoy</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {interests.map((interest) => (
                                <motion.span
                                    key={interest.name}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-gray-400 flex items-center gap-1.5 cursor-default"
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
                            <span className="text-indigo-400">Next.js</span>,{" "}
                            <span className="text-cyan-400">Tailwind</span> &{" "}
                            <span className="text-purple-400">Framer Motion</span>
                        </p>
                    </div>
                </motion.footer>
            </div>
        </AnimatedSection>
    );
}
