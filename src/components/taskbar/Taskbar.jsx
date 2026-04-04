import React from 'react';
import { useOS } from '../../context/OSContext';
import { Search, Github, Linkedin, Mail } from 'lucide-react';
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

export default function Taskbar() {
    const { searchQuery, setSearchQuery, weather, time, openWindows, activeWindow, toggleMinimize, setActiveWindow } = useOS();

    return (
        <div className="w-full max-w-5xl h-14 backdrop-blur-xl bg-white/[0.10] rounded-full border border-white/[0.20] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-between px-8 relative overflow-visible">
            {/* Top glass shine line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Weather Chip */}
            <div className="flex items-center gap-3 w-44">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white/[0.10] border border-white/[0.20] transition-colors hover:bg-white/[0.16]">
                    <span className="text-lg">⛅</span>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black tracking-tight text-white">27°C</span>
                        <span className="text-[7.5px] font-bold uppercase tracking-[0.3em] text-white/60">Chennai</span>
                    </div>
                </div>
            </div>

            {/* Center Group */}
            <div className="flex items-center gap-6 flex-1 justify-center">
                {/* Glass Search Pill */}
                <div className="relative group/search w-56 hidden md:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/search:text-white transition-colors" size={12} />
                    <input
                        type="text"
                        placeholder="Search workspace..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-9 bg-white/[0.08] border border-white/[0.20] rounded-full pl-11 pr-4 text-[10.5px] font-medium tracking-wide focus:outline-none focus:bg-white/[0.15] focus:border-white/40 transition-all placeholder:text-white/30 text-white"
                    />
                </div>

                <div className="h-5 w-px bg-white/20 hidden md:block" />

                {/* Open Windows / Apps */}
                <div className="flex items-center gap-2">
                    {openWindows.map(win => {
                        const iconSrc = appIcons[win.id];
                        return (
                            <div key={win.id} className="relative group/taskicon">
                                <button
                                    onClick={() => {
                                        if (win.minimized) {
                                            toggleMinimize(win.id);
                                        }
                                        setActiveWindow(win.id);
                                    }}
                                    className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300
                                        ${activeWindow === win.id && !win.minimized
                                            ? 'bg-white/[0.15] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-105'
                                            : 'hover:bg-white/[0.1] hover:scale-110'}
                                    `}
                                >
                                    {iconSrc ? (
                                        <img src={iconSrc} alt={win.id} className="w-7 h-7 object-contain drop-shadow-md" />
                                    ) : (
                                        <span className={`w-1.5 h-1.5 rounded-full ${win.minimized ? 'bg-white/30' : 'bg-accent shadow-[0_0_8px_rgba(150,130,115,0.5)]'}`} />
                                    )}
                                    {/* Active indicator dot */}
                                    {activeWindow === win.id && !win.minimized && (
                                        <div className="absolute -bottom-[6px] w-[5px] h-[5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                    )}
                                    {/* Open/Minimized inactive indicator dot */}
                                    {(activeWindow !== win.id || win.minimized) && (
                                        <div className="absolute -bottom-[6px] w-[3px] h-[3px] rounded-full bg-white/40 transition-all group-hover/taskicon:bg-white/70" />
                                    )}
                                </button>
                                
                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background/95 backdrop-blur-md rounded-lg text-white/90 text-[10px] font-bold tracking-wide shadow-xl border border-white/10 opacity-0 group-hover/taskicon:opacity-100 transition-all transform scale-95 group-hover/taskicon:scale-100 pointer-events-none whitespace-nowrap z-50">
                                    {win.id.charAt(0).toUpperCase() + win.id.slice(1)}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="h-5 w-px bg-white/20" />

                {/* Social Icons */}
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
                                whileHover={{ scale: 1.2, y: -3 }}
                                className="w-9 h-9 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/[0.15] transition-all"
                            >
                                <Icon size={16} />
                            </motion.a>
                        )
                    })}
                </div>
            </div>

            {/* Time */}
            <div className="w-44 flex justify-end gap-3 items-center">
                <div className="h-8 w-px bg-white/20" />
                <div className="flex flex-col text-right">
                    <span className="text-[11px] font-black tracking-tighter text-white">
                        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50">
                        {time.toLocaleDateString([], { month: 'short', day: 'numeric' })}
                    </span>
                </div>
            </div>
        </div>
    );
}
