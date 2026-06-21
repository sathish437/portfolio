import React, { useState } from 'react';
import { useOS } from '../../context/OSContext';
import { Search, Github, Linkedin, Mail, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';
import { motion } from 'framer-motion';

// App Icons
import contactIcon from '../../img/contact.png';
import aboutIcon from '../../img/about.png';
import projectsIcon from '../../img/projects.png';
import skillsIcon from '../../img/skills.png';

const appIcons = {
    contact: contactIcon,
    about: aboutIcon,
    projects: projectsIcon,
    skills: skillsIcon
};

// Helper component for taskbar app icons to handle images and fallback
function TaskbarIcon({ id, iconSrc }) {
    const [hasError, setHasError] = useState(false);

    if (!iconSrc) {
        return <span className="text-lg relative z-10">⏱️</span>;
    }

    const isImageUrl = typeof iconSrc === 'string' && (
        iconSrc.startsWith('/') ||
        iconSrc.startsWith('http') ||
        iconSrc.startsWith('data:') ||
        /\.(png|jpg|jpeg|gif|svg)/i.test(iconSrc)
    );

    if (isImageUrl && !hasError) {
        return (
            <img
                src={iconSrc}
                alt={id}
                onError={() => setHasError(true)}
                className="w-6 h-6 object-contain relative z-10"
            />
        );
    }

    // Fallback: clean text logo (styled first letter)
    const fallbackText = id ? id.charAt(0).toUpperCase() : '?';

    return (
        <span className="text-xs font-black uppercase tracking-wider relative z-10 text-accent font-mono">
            {fallbackText}
        </span>
    );
}

export default function Taskbar() {
    const { searchQuery, setSearchQuery, weather, time, openWindows, activeWindow, toggleMinimize, setActiveWindow } = useOS();

    return (
        <div className="w-full max-w-5xl h-14 backdrop-blur-xl bg-[#09090b]/75 rounded-full border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.03)] flex items-center justify-between px-8 relative overflow-visible select-none">
            {/* Ambient subtle header border glow */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

            {/* Weather status */}
            <div className="flex items-center gap-3 w-44">
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.04] transition-all hover:bg-white/[0.04] hover:border-white/10">
                    <span className="text-sm">⛅</span>
                    <span className="text-[10px] font-black tracking-tight text-off-white">{weather?.temp || 27}°C</span>
                </div>
            </div>

            {/* Center Dock Operations */}
            <div className="flex items-center gap-6 flex-1 justify-center">
                {/* Search Pills */}
                <div className="relative group/search w-48 hidden md:block">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-text-muted group-focus-within/search:text-accent transition-colors" size={12} />
                    <input
                        type="text"
                        placeholder="Search system registry..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-8 bg-white/[0.02] border border-white/[0.06] rounded-full pl-9 pr-4 text-[10px] font-bold tracking-wide focus:outline-none focus:bg-white/[0.04] focus:border-accent/40 transition-all placeholder:text-gray-text-muted text-off-white"
                    />
                </div>

                <div className="h-5 w-px bg-white/[0.08] hidden md:block" />

                {/* Opened Apps indicators */}
                <div className="flex items-center gap-2">
                    {openWindows.map(win => {
                        const iconSrc = appIcons[win.id];
                        const isActive = activeWindow === win.id && !win.minimized;

                        return (
                            <div key={win.id} className="relative group/taskicon">
                                <button
                                    onClick={() => {
                                        if (win.minimized) {
                                            toggleMinimize(win.id);
                                        }
                                        setActiveWindow(win.id);
                                    }}
                                    className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300
                                        ${isActive
                                            ? 'bg-white/[0.04] border border-accent/30 shadow-glow-cyan-sm scale-105'
                                            : 'hover:bg-white/[0.03] hover:border-white/10 hover:scale-110 bg-white/[0.01] border border-white/[0.04]'}
                                    `}
                                >
                                    <TaskbarIcon id={win.id} iconSrc={iconSrc} />

                                    {/* Neon active/minimized indicator dots */}
                                    {isActive ? (
                                        <div className="absolute -bottom-[5px] w-1.5 h-1.5 rounded-full bg-accent shadow-glow-cyan" />
                                    ) : (
                                        <div className="absolute -bottom-[5px] w-1 h-1 rounded-full bg-accent-purple/30 group-hover/taskicon:bg-accent-purple" />
                                    )}
                                </button>

                                {/* Hover tooltips */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#09090b] rounded-lg text-off-white text-[9px] font-black tracking-widest shadow-xl border border-white/5 opacity-0 group-hover/taskicon:opacity-100 transition-all transform scale-95 group-hover/taskicon:scale-100 pointer-events-none whitespace-nowrap z-50">
                                    {win.id.charAt(0).toUpperCase() + win.id.slice(1)}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="h-5 w-px bg-white/[0.08]" />

                {/* Social links deck */}
                <div className="flex items-center gap-1">
                    {[
                        { icon: Github, href: portfolioData.profile.social.github },
                        { icon: Linkedin, href: portfolioData.profile.social.linkedin },
                        { icon: Mail, href: portfolioData.profile.social.email }
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.15, y: -2 }}
                                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-text-muted hover:text-off-white hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/[0.04]"
                            >
                                <Icon size={14} />
                            </motion.a>
                        )
                    })}
                </div>
            </div>

            {/* Time status clock */}
            <div className="w-44 flex justify-end gap-3 items-center">
                <div className="h-8 w-px bg-white/[0.08]" />
                <div className="flex flex-col text-right">
                    <span className="text-[10px] font-black tracking-tight text-off-white">
                        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span className="text-[7.5px] font-bold uppercase tracking-[0.25em] text-gray-text-muted">
                        {time.toLocaleDateString([], { month: 'short', day: 'numeric' })}
                    </span>
                </div>
            </div>
        </div>
    );
}
