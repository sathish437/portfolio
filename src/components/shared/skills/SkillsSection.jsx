import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Layout, Server, Database, Globe, Wrench, Cpu, Layers
} from 'lucide-react';

const categoryIcons = {
    'Programming Languages': Code2,
    'Frontend Development': Layout,
    'Backend Development': Server,
    'Databases': Database,
    'Cloud & Development Tools': Globe,
    'API & Testing Tools': Wrench,
    'Architecture & Concepts': Layers,
};

// Each category gets a unique accent so the grid feels varied
const categoryAccents = [
    { border: 'border-cyan-400/15',    glow: 'hover:border-cyan-400/35 hover:shadow-[0_0_20px_rgba(0,242,254,0.08)]',    icon: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',    badge: 'bg-cyan-400/8  border-cyan-400/15 text-cyan-300'    },
    { border: 'border-violet-400/15',  glow: 'hover:border-violet-400/35 hover:shadow-[0_0_20px_rgba(139,92,246,0.08)]',  icon: 'text-violet-400 bg-violet-400/10 border-violet-400/20',  badge: 'bg-violet-400/8 border-violet-400/15 text-violet-300' },
    { border: 'border-indigo-400/15',  glow: 'hover:border-indigo-400/35 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]',  icon: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',  badge: 'bg-indigo-400/8 border-indigo-400/15 text-indigo-300' },
    { border: 'border-emerald-400/15', glow: 'hover:border-emerald-400/35 hover:shadow-[0_0_20px_rgba(52,211,153,0.08)]', icon: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', badge: 'bg-emerald-400/8 border-emerald-400/15 text-emerald-300' },
    { border: 'border-amber-400/15',   glow: 'hover:border-amber-400/35 hover:shadow-[0_0_20px_rgba(251,191,36,0.08)]',   icon: 'text-amber-400 bg-amber-400/10 border-amber-400/20',   badge: 'bg-emerald-400/8 border-emerald-400/15 text-emerald-300'   },
    { border: 'border-rose-400/15',    glow: 'hover:border-rose-400/35 hover:shadow-[0_0_20px_rgba(251,113,133,0.08)]',    icon: 'text-rose-400 bg-rose-400/10 border-rose-400/20',    badge: 'bg-rose-400/8 border-rose-400/15 text-rose-300'    },
];

export default function SkillsSection({ data, variant = 'desktop' }) {
    const categories = data.categories;
    const totalSkills = categories.reduce((a, c) => a + c.items.length, 0);

    return (
        <div className="w-full flex flex-col gap-5 text-left">

            {/* ── Section header ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 border-b border-white/[0.06] pb-4"
            >
                <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Cpu size={20} className="animate-pulse" />
                </div>
                <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-white font-outfit">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Expertise</span>
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-0.5">
                        {totalSkills} technologies · {categories.length} domains
                    </p>
                </div>
            </motion.div>

            {/* ── Category Glass Cards Grid ── */}
            <div className={`grid gap-3 ${
                variant === 'desktop'
                    ? 'grid-cols-1 sm:grid-cols-2 max-h-[380px] overflow-y-auto no-scrollbar pr-1 pb-2'
                    : 'grid-cols-1 pb-4'
            }`}>
                {categories.map((cat, i) => {
                    const Icon = categoryIcons[cat.name] || Cpu;
                    const accent = categoryAccents[i % categoryAccents.length];

                    return (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -3, scale: 1.01 }}
                            className={`relative rounded-2xl border backdrop-blur-md overflow-hidden p-4 transition-all duration-300
                                bg-white/[0.015] ${accent.border} ${accent.glow} group`}
                        >
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Header: icon + title + count */}
                            <div className="relative z-10 flex items-center gap-3 mb-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${accent.icon}`}>
                                    <Icon size={15} strokeWidth={2} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-[11px] font-black uppercase tracking-wider text-white/90 leading-none">
                                        {cat.name}
                                    </h3>
                                </div>
                                <span className="text-[9px] font-mono text-white/25 shrink-0">
                                    {cat.items.length}
                                </span>
                            </div>

                            {/* Technology badges */}
                            <div className="relative z-10 flex flex-wrap gap-1.5">
                                {cat.items.map((skill, si) => (
                                    <motion.span
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (i * 0.06) + (si * 0.04), duration: 0.4 }}
                                        whileHover={{ scale: 1.08, y: -1 }}
                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9.5px] font-bold
                                            tracking-wide cursor-default transition-all duration-200 select-none
                                            ${skill.highlight
                                                ? accent.badge
                                                : 'bg-white/[0.03] border-white/[0.06] text-white/45 hover:text-white/75 hover:bg-white/[0.06]'
                                            }`}
                                    >
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
