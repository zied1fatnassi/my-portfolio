"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
    return (
        <motion.div
            className={`glass-card p-6 ${className}`}
            whileHover={hover ? { scale: 1.02, y: -5 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
