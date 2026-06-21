import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal, ExternalLink, ChevronDown, Sparkles,
    CheckCircle2, Layers, Radio
} from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';

// ─── Accent colors per category ────────────────────────────────────────────
const catAccents = [
    { dot: 'bg-cyan-400',    text: 'text-cyan-400',    border: 'border-cyan-400/30',  glow: 'shadow-[0_0_18px_rgba(0,242,254,0.12)]', bg: 'bg-cyan-400/[0.03]'   },
    { dot: 'bg-violet-400',  text: 'text-violet-400',  border: 'border-violet-400/30', glow: 'shadow-[0_0_18px_rgba(139,92,246,0.12)]', bg: 'bg-violet-400/[0.03]' },
    { dot: 'bg-sky-400',     text: 'text-sky-400',     border: 'border-sky-400/30',    glow: 'shadow-[0_0_18px_rgba(56,189,248,0.12)]',  bg: 'bg-sky-400/[0.03]'    },
    { dot: 'bg-indigo-400',  text: 'text-indigo-400',  border: 'border-indigo-400/30', glow: 'shadow-[0_0_18px_rgba(99,102,241,0.12)]', bg: 'bg-indigo-400/[0.03]' },
];

// ─── Status config ─────────────────────────────────────────────────────────
const statusStyles = {
    Live:     { dot: 'bg-emerald-400', text: 'text-emerald-400', label: 'Live'     },
    Beta:     { dot: 'bg-amber-400',   text: 'text-amber-400',   label: 'Beta'     },
    Archived: { dot: 'bg-white/30',    text: 'text-white/40',    label: 'Archived' },
};

// ─── Single accordion project row ──────────────────────────────────────────
function ProjectRow({ project, isOpen, onToggle, accent }) {
    const status = statusStyles[project.status] || statusStyles.Live;

    return (
        <div className="w-full">
            {/* Collapsed name row — always visible */}
            <motion.button
                onClick={onToggle}
                layout
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 rounded-xl border group select-none
                    ${isOpen
                        ? `${accent.bg} ${accent.border} ${accent.glow}`
                        : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/[0.06]'
                    }`}
            >
                {/* Status dot */}
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isOpen ? accent.dot : 'bg-white/20'} transition-colors`} />

                {/* Project name */}
                <span className={`flex-1 text-[12px] font-bold tracking-tight transition-colors duration-200 ${
                    isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'
                }`}>
                    {project.name}
                </span>

                {/* Featured badge */}
                {project.featured && (
                    <Sparkles size={10} className={`shrink-0 ${isOpen ? accent.text : 'text-white/20'} transition-colors`} />
                )}

                {/* Chevron */}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0"
                >
                    <ChevronDown size={13} className={`${isOpen ? accent.text : 'text-white/20'} transition-colors`} />
                </motion.div>
            </motion.button>

            {/* Expanded details — smooth height animation */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className={`mx-2 mt-1 mb-2 p-4 rounded-xl border backdrop-blur-md
                                bg-white/[0.015] border-white/[0.06]`}
                        >
                            {/* Top row: type + status */}
                            <div className="flex items-center justify-between gap-2 mb-3">
                                {project.type && (
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[8.5px] font-black uppercase tracking-widest
                                        bg-white/[0.03] border-white/[0.06] ${accent.text}`}>
                                        <Layers size={8} strokeWidth={2.5} />
                                        {project.type}
                                    </span>
                                )}
                                <span className={`inline-flex items-center gap-1.5 text-[8.5px] font-black uppercase tracking-wider ${status.text}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${status.dot}`} />
                                    {status.label}
                                </span>
                            </div>

                            {/* Description */}
                            {project.description && (
                                <p className="text-[10.5px] text-white/45 leading-relaxed mb-3 font-medium">
                                    {project.description}
                                </p>
                            )}

                            {/* Feature bullets */}
                            {project.features && project.features.length > 0 && (
                                <ul className="flex flex-col gap-1 mb-3">
                                    {project.features.map((f, fi) => (
                                        <li key={fi} className="flex items-start gap-2">
                                            <CheckCircle2 size={10} className={`mt-0.5 shrink-0 ${accent.text} opacity-60`} strokeWidth={2.5} />
                                            <span className="text-[10px] text-white/50 leading-snug font-medium">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Tech stack chips */}
                            {project.stack && project.stack.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.stack.map((tech, ti) => (
                                        <span key={ti} className="text-[8.5px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-white/40">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Action links */}
                            <div className="flex items-center gap-2 pt-2 border-t border-white/[0.05]">
                                {project.links?.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300
                                            bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]`}
                                    >
                                        <ExternalLink size={10} strokeWidth={2.5} />
                                        View Live
                                    </a>
                                )}
                                {project.links?.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                                    >
                                        Source
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Main CategorizedProjects ──────────────────────────────────────────────
export default function CategorizedProjects() {
    const categories = portfolioData.sections.projects;
    const totalProjects = categories.reduce((a, c) => a + c.projects.length, 0);

    // Track which project is expanded — only one at a time across all categories
    const [expandedKey, setExpandedKey] = useState(null);

    const toggleProject = (key) => {
        setExpandedKey(prev => (prev === key ? null : key));
    };

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
                    <Terminal size={20} className="animate-pulse" />
                </div>
                <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-white font-outfit">
                        Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Registry</span>
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-0.5">
                        {totalProjects} live projects · {categories.length} stacks
                    </p>
                </div>
            </motion.div>

            {/* ── Accordion list by category ── */}
            <div className="flex flex-col gap-5 pr-0.5 pb-4">
                {categories.map((cat, catIdx) => {
                    if (cat.projects.length === 0) return null;
                    const accent = catAccents[catIdx % catAccents.length];

                    return (
                        <motion.div
                            key={cat.categoryName}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: catIdx * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-0.5"
                        >
                            {/* Category header label */}
                            <div className="flex items-center gap-2 px-3 mb-1">
                                <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${accent.text}`}>
                                    {cat.categoryName}
                                </span>
                                <span className="text-[8px] font-mono text-white/20 ml-auto">
                                    {cat.projects.length} nodes
                                </span>
                            </div>

                            {/* Project name rows */}
                            {cat.projects.map((project) => {
                                const key = `${catIdx}-${project.id}`;
                                return (
                                    <ProjectRow
                                        key={key}
                                        project={project}
                                        isOpen={expandedKey === key}
                                        onToggle={() => toggleProject(key)}
                                        accent={accent}
                                    />
                                );
                            })}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
