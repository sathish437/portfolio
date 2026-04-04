import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';

export default function MobileFooter() {
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
        },
        {
            name: 'Email',
            icon: Mail,
            href: portfolioData.profile.social.email,
        }
    ];

    return (
        <div className="fixed border-t-2 rounded-t-2xl border-accent-light bottom-0 left-0 right-0 z-[5000] pb-safe bg-background/95 backdrop-blur-2xl border-t border-white/[0.05] shadow-[0_-10px_30px_rgba(0,0,0,0.4)]">
            <div className="py-3 px-10 max-w-sm mx-auto flex justify-between items-center">
                {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.name}
                            href={social.href}
                            target={social.name !== 'Email' ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="flex items-center justify-center p-2 text-white/50 hover:text-accent active:scale-95 transition-all duration-300 relative"
                        >
                            <Icon size={24} strokeWidth={1.5} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
