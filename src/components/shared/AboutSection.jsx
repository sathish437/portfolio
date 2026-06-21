import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, User, Cpu, Award } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const fadeLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -20, filter: 'blur(6px)' },
    whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function AboutSection({ variant = 'desktop' }) {
    const data = portfolioData.sections.about;

    const stats = [
        { label: "Execution Engine", value: "Java & JVM", icon: Cpu, color: "text-accent" },
        { label: "Core Competency", value: "Full Stack", icon: Shield, color: "text-accent-purple" },
        { label: "Coding Philosophy", value: "Query & Architecture", icon: Target, color: "text-accent-blue" }
    ];

    return (
        <div className="w-full flex flex-col gap-6">

            {/* Header Identity banner */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                    <User size={22} className="animate-pulse" />
                </div>
                <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-off-white font-outfit">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Identity</span>
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-text-muted">Cognitive system specs</p>
                </div>
            </motion.div>

            {/* Profile Intro narrative card */}
            <motion.div
                {...fadeUp(0.1)}
                className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.06] backdrop-blur-md shadow-inner-glow relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 blur-2xl rounded-full pointer-events-none" />
                <p className="text-[13px] leading-relaxed text-off-white/80 font-medium font-sans">
                    {data.intro}
                </p>
            </motion.div>

            {/* Tech Highlight Pill */}
            <motion.div
                {...fadeLeft(0.15)}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-accent/10 to-accent-purple/10 border border-accent/20 shadow-glow-cyan-sm"
            >
                <Award size={16} className="text-accent" />
                <span className="text-[11px] font-bold text-accent tracking-wide">
                    {data.techHighlight}
                </span>
            </motion.div>

            {/* Core Stats / Competency Specs — staggered */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={i}
                            {...fadeUp(0.15 + i * 0.08)}
                            whileHover={{ y: -3, scale: 1.02 }}
                            className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:border-accent/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col gap-2"
                        >
                            <div className={`w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center ${stat.color}`}>
                                <Icon size={16} />
                            </div>
                            <div>
                                <h4 className="text-[9px] uppercase tracking-widest text-gray-text-muted">{stat.label}</h4>
                                <p className="text-xs font-bold text-off-white mt-0.5 truncate">{stat.value}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mission Statement Block */}
            <motion.div
                {...fadeUp(0.35)}
                className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.01] to-white/[0.005] border border-white/[0.04] flex flex-col gap-2 relative overflow-hidden"
            >
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-accent/5 blur-2xl rounded-full pointer-events-none" />
                <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-accent font-outfit">Core Objective</h3>
                <p className="text-xs leading-relaxed text-gray-text-muted font-medium">{data.statement}</p>
            </motion.div>
        </div>
    );
}
