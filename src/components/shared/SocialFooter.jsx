import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';

export default function SocialFooter() {
    const socials = [
        { 
            name: 'GitHub', 
            icon: Github, 
            href: portfolioData.profile.social.github, 
        },
        { 
            name: 'LinkedIn', 
            icon: Linkedin, 
            href: portfolioData.profile.social.linkedin, 
        }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[5000] pointer-events-none pb-2 flex justify-center">
            <div className="flex items-center gap-4 px-6 py-2.5 bg-background/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto">
                {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                        <div key={social.name} className="relative group flex items-center justify-center">
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] text-white/50 hover:bg-white/[0.1] hover:text-accent border border-white/5 hover:border-accent/40 transition-all duration-300 transform group-hover:scale-110"
                            >
                                <Icon size={18} strokeWidth={1.5} />
                            </a>
                            {/* Tooltip */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 backdrop-blur-md rounded-lg text-[10px] font-bold tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
                                {social.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
