"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import GlassCard from "../GlassCard";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Instagram", icon: "📸", url: "https://instagram.com" },
];

export default function Contact() {
    return (
        <AnimatedSection className="py-32 px-6 relative" delay={0.1}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div id="contact" className="container mx-auto relative z-10 scroll-mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm uppercase tracking-widest mb-4">Get in touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Have a project in mind? Want to collaborate? Or just want to say hi?
                        I&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="How can I help you?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    Send Message 🚀
                                </motion.button>
                            </form>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Info Cards */}
                        <GlassCard className="flex items-center gap-4">
                            <div className="p-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl">
                                <EnvelopeIcon className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email me at</p>
                                <a href="mailto:zied@example.com" className="text-lg font-medium hover:text-indigo-400 transition-colors">
                                    zied@example.com
                                </a>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center gap-4">
                            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                                <MapPinIcon className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-lg font-medium">Ksar Hellal, Tunisia 🇹🇳</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center gap-4">
                            <div className="p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl">
                                <PhoneIcon className="w-6 h-6 text-pink-400" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Available for</p>
                                <p className="text-lg font-medium">Freelance & Full-time</p>
                            </div>
                        </GlassCard>

                        {/* Social Links */}
                        <GlassCard>
                            <h4 className="text-lg font-semibold mb-4">Find me on</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-colors"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
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
                    className="mt-24 pt-8 border-t border-white/10 text-center text-gray-400"
                >
                    <p>
                        © 2024 Zied. Built with ❤️ using{" "}
                        <span className="text-indigo-400">Next.js</span> &{" "}
                        <span className="text-purple-400">Framer Motion</span>
                    </p>
                </motion.footer>
            </div>
        </AnimatedSection>
    );
}
