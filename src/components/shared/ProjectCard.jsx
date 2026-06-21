import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CheckCircle2, Radio, Layers } from 'lucide-react';

// ─── Status badge config ───────────────────────────────────────────────────────
const statusConfig = {
    Live:     { dot: 'bg-emerald-400', text: 'text-emerald-400', border: 'border-emerald-400/25', bg: 'bg-emerald-400/10', label: 'Live' },
    Beta:     { dot: 'bg-amber-400',   text: 'text-amber-400',   border: 'border-amber-400/25',   bg: 'bg-amber-400/10',   label: 'Beta' },
    Archived: { dot: 'bg-white/30',    text: 'text-white/40',    border: 'border-white/10',        bg: 'bg-white/[0.03]',   label: 'Archived' },
};

// ─── Type badge config ────────────────────────────────────────────────────────
const typeConfig = {
    'Web App':         { color: 'text-sky-400',     bg: 'bg-sky-400/10',     border: 'border-sky-400/20'    },
    'Tool':            { color: 'text-violet-400',  bg: 'bg-violet-400/10',  border: 'border-violet-400/20' },
    'Dashboard':       { color: 'text-cyan-400',    bg: 'bg-cyan-400/10',    border: 'border-cyan-400/20'   },
    'Full Stack':      { color: 'text-indigo-400',  bg: 'bg-indigo-400/10',  border: 'border-indigo-400/20' },
    'API Integration': { color: 'text-pink-400',    bg: 'bg-pink-400/10',    border: 'border-pink-400/20'   },
    'Platform':        { color: 'text-orange-400',  bg: 'bg-orange-400/10',  border: 'border-orange-400/20' },
};

export default function ProjectCard({ project, index, isMobile = false }) {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const status  = statusConfig[project.status]  || statusConfig.Live;
    const typeStyle = typeConfig[project.type]    || typeConfig['Web App'];

    // ── 3D Tilt ────────────────────────────────────────────────────────────────
    const handleMouseMove = (e) => {
        if (isMobile) return;
        const card = cardRef.current;
        if (!card) return;
        const rect   = card.getBoundingClientRect();
        const x      = e.clientX - rect.left - rect.width  / 2;
        const y      = e.clientY - rect.top  - rect.height / 2;
        setTilt({ x: -(y / rect.height) * 8, y: (x / rect.width) * 8 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const isFeatured = project.featured;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: (index || 0) * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
                transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isHovered ? 'none' : 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
            }}
            className="w-full"
        >
            {/* ── Card Shell ── */}
            <div className={`relative flex flex-col gap-0 rounded-2xl border overflow-hidden backdrop-blur-md transition-all duration-300 ${
                isFeatured
                    ? 'bg-cyan-400/[0.025] border-cyan-400/20 hover:border-cyan-400/40 shadow-[0_0_20px_rgba(0,242,254,0.06)]'
                    : 'bg-white/[0.015] border-white/[0.06] hover:border-violet-400/30'
            }`}>

                {/* Gradient shimmer overlay on hover */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${
                    isFeatured
                        ? 'bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-violet-400/[0.04]'
                        : 'bg-gradient-to-br from-white/[0.02] via-transparent to-violet-400/[0.03]'
                } ${isHovered ? 'opacity-100' : ''}`} />

                {/* ── Top header bar ── */}
                <div className="relative z-10 flex items-center justify-between gap-2 px-4 pt-4 pb-3 border-b border-white/[0.05]">

                    {/* Left: type badge */}
                    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[9px] font-black uppercase tracking-widest ${typeStyle.bg} ${typeStyle.border} ${typeStyle.color}`}>
                        <Layers size={9} strokeWidth={2.5} />
                        {project.type}
                    </div>

                    {/* Right: status pill */}
                    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-wider ${status.bg} ${status.border} ${status.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${status.dot}`} />
                        {status.label}
                    </div>
                </div>

                {/* ── Main body ── */}
                <div className="relative z-10 flex flex-col gap-3 px-4 pt-3 pb-4">

                    {/* Project title */}
                    <div className="flex items-start justify-between gap-2">
                        <h3 className={`text-[13px] font-black tracking-tight leading-tight font-outfit uppercase ${
                            isFeatured ? 'text-white' : 'text-white/90'
                        }`}>
                            {project.name}
                            {isFeatured && (
                                <Sparkles size={10} className="inline ml-1.5 text-cyan-400 animate-pulse align-middle" />
                            )}
                        </h3>
                    </div>

                    {/* Description — one line */}
                    <p className="text-[10.5px] text-white/40 leading-snug font-medium line-clamp-2">
                        {project.description}
                    </p>

                    {/* ── Feature bullets ── */}
                    {project.features && project.features.length > 0 && (
                        <ul className="flex flex-col gap-1">
                            {project.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle2 size={10} className={`mt-0.5 shrink-0 ${isFeatured ? 'text-cyan-400/70' : 'text-violet-400/60'}`} strokeWidth={2.5} />
                                    <span className="text-[10px] text-white/55 leading-snug font-medium">{f}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* ── Tech stack chips ── */}
                    <div className="flex flex-wrap gap-1 pt-1">
                        {project.stack?.map((tech, i) => (
                            <span
                                key={i}
                                className="text-[8.5px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-white/40"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── Footer action bar ── */}
                <div className="relative z-10 flex items-center gap-2 px-4 py-3 border-t border-white/[0.05] mt-auto">
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-white hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200 flex items-center justify-center"
                            title="Source Code"
                        >
                            <Github size={13} strokeWidth={2} />
                        </a>
                    )}

                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-1.5 ${
                                isFeatured
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.35)]'
                                    : 'bg-white/[0.05] border border-white/[0.08] text-white/70 hover:bg-white/[0.1] hover:text-white'
                            }`}
                        >
                            <ExternalLink size={11} strokeWidth={2.5} />
                            View Live
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
