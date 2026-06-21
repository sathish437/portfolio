import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Terminal, Activity, Play } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';
import InfiniteMarquee from '../shared/InfiniteMarquee';

const techStrip = ['Java', 'Spring Boot', 'React', 'JavaScript', 'MySQL', 'REST API', 'Tailwind CSS', 'Docker', 'GitHub', 'Hibernate'];

export default function Hero({ onOpenWindow }) {

    // Magnetic CTA Button physics
    const ctaRef = useRef(null);
    const mX = useMotionValue(0);
    const mY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mX, springConfig);
    const springY = useSpring(mY, springConfig);

    const handleCtaMouseMove = (e) => {
        const rect = ctaRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        mX.set(x * 0.35);
        mY.set(y * 0.35);
    };

    const handleCtaMouseLeave = () => {
        mX.set(0);
        mY.set(0);
    };

    // Split name into individual characters for staggered reveal
    const nameChars = portfolioData.profile.name.split('');

    return (
        <div className="flex flex-col items-center justify-center select-none text-center max-w-4xl px-4 pointer-events-auto">
            {/* Top Status Tag — fade down */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8 backdrop-blur-md shadow-glow-cyan-sm"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-glow-cyan" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                    {portfolioData.profile.status}
                </span>
            </motion.div>

            {/* Massive Typography Title — per-character stagger */}
            <div className="relative group mb-3">
                <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none font-outfit flex"
                    style={{ textShadow: '0 10px 40px rgba(0,0,0,0.8)' }}
                >
                    {nameChars.map((char, i) => (
                        <motion.span
                            key={`name-char-${i}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="glow-text-cyan text-off-white inline-block"
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-purple blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none -z-10" />
            </div>

            {/* Role description — slide up + fade */}
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] font-black uppercase tracking-[0.55em] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-blue to-accent-purple drop-shadow-md"
            >
                {portfolioData.profile.role}
            </motion.p>

            {/* Auto-scrolling tech marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full max-w-md mb-8"
            >
                <InfiniteMarquee speed={20} pauseOnHover className="py-2">
                    {techStrip.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[9px] font-bold text-white/40 tracking-wider uppercase whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </InfiniteMarquee>
            </motion.div>

            {/* Status Terminal Dashboard Block */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md p-4 rounded-2xl bg-white/[0.015] border border-white/[0.06] backdrop-blur-md shadow-inner-glow mb-10 flex flex-col gap-2.5 text-left text-xs font-mono relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl rounded-full pointer-events-none" />

                <div className="flex justify-between items-center border-b border-white/[0.06] pb-2 text-[10px] uppercase tracking-wider text-gray-text-muted">
                    <div className="flex items-center gap-1.5 font-bold">
                        <Terminal size={11} className="text-accent animate-pulse" />
                        <span>System core status</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Activity size={10} className="text-accent" />
                        <span>24ms latency</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 pt-1 text-[11px] text-off-white/80">
                    <div className="flex justify-between">
                        <span className="text-gray-text-muted">Engine:</span>
                        <span className="font-bold text-accent">Spring Boot 3</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-text-muted">Interface:</span>
                        <span className="font-bold text-accent-purple">React 18</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-text-muted">Database:</span>
                        <span className="font-bold">PostgreSQL</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-text-muted">VCS Core:</span>
                        <span className="font-bold text-gray-text-muted">GitHub Online</span>
                    </div>
                </div>
            </motion.div>

            {/* Magnetic CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6"
            >
                <motion.button
                    ref={ctaRef}
                    onMouseMove={handleCtaMouseMove}
                    onMouseLeave={handleCtaMouseLeave}
                    onClick={() => onOpenWindow('projects')}
                    style={{ x: springX, y: springY }}
                    className="relative px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-blue hover:shadow-glow-cyan text-background font-black text-xs uppercase tracking-[0.25em] flex items-center gap-3 transition-shadow duration-300 border border-cyan-400/30 group/cta"
                >
                    <Play size={13} fill="currentColor" className="group-hover/cta:translate-x-0.5 transition-transform" />
                    <span>Initiate Workspace</span>
                </motion.button>

                <button
                    onClick={() => onOpenWindow('about')}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-text-muted hover:text-white transition-colors duration-300 py-3"
                >
                    Explore Identity
                </button>
            </motion.div>
        </div>
    );
}
