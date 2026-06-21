import React, { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../utils/portfolioData';
import AboutSection from '../components/shared/AboutSection';
import SkillsSection from '../components/shared/skills/SkillsSection';
import CategorizedProjects from '../components/shared/CategorizedProjects';
import ContactSection from '../components/shared/ContactSection';
import FuturisticBackground from '../components/backgrounds/FuturisticBackground';
import MobileFooter from '../components/mobile/MobileFooter';
import { motion } from 'framer-motion';

const nameChars = portfolioData.profile.name.split('');

const sectionsData = [
    {
        id: 'intro',
        component: () => (
            <div className="relative w-full h-[100dvh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <FuturisticBackground />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-2 max-w-sm">
                    {/* Glowing system tag */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/25 mb-4 shadow-glow-cyan-sm animate-pulse">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-accent">Active Node</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-black mb-1 leading-none tracking-tighter uppercase font-outfit text-off-white flex">
                        {nameChars.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className="glow-text-cyan text-off-white"
                                style={{
                                    display: 'inline-block',
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </h1>

                    <p className="text-[9.5px] font-black uppercase tracking-[0.45em] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-purple drop-shadow-md">
                        {portfolioData.profile.role}
                    </p>

                    {/* Quick description */}
                    <p className="text-xs text-gray-text-muted leading-relaxed mb-10 px-4 font-medium">
                        {portfolioData.profile.intro}
                    </p>

                    <div className="flex flex-col items-center gap-2 animate-bounce mt-6 text-accent">
                        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-text-muted">Swipe Left</span>
                        <span className="text-lg leading-none">→</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'about',
        component: () => (
            <div className="relative px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto scroll-smooth no-scrollbar">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full relative z-10">
                    <AboutSection variant="mobile" />
                </div>
            </div>
        )
    },
    {
        id: 'skills',
        component: () => (
            <div className="relative px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto scroll-smooth no-scrollbar">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full relative z-10">
                    <SkillsSection data={portfolioData.sections.skills} variant="mobile" />
                </div>
            </div>
        )
    },
    {
        id: 'projects',
        component: () => (
            <div className="relative px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto scroll-smooth no-scrollbar">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full relative z-10">
                    <CategorizedProjects />
                </div>
            </div>
        )
    },
    {
        id: 'contact',
        component: () => (
            <div className="relative px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto scroll-smooth no-scrollbar">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full relative z-10">
                    <ContactSection data={portfolioData.sections.contact} />
                </div>
            </div>
        )
    }
];

export default function MobileLayout() {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const containerWidth = container.clientWidth;
            const newIndex = Math.round(scrollLeft / containerWidth);
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [activeIndex]);

    const scrollToSlide = (index) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const containerWidth = container.clientWidth;
        container.scrollTo({
            left: index * containerWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative h-[100dvh] w-screen bg-[#050505] overflow-hidden font-sans text-off-white">
            {/* Global Dynamic Background for non-intro slides */}
            {activeIndex !== 0 && (
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <FuturisticBackground />
                </div>
            )}

            {/* Glowing active indicator slide dots */}
            <div className="absolute top-6 left-0 right-0 z-[100] flex justify-center gap-2.5">
                {sectionsData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToSlide(i)}
                        className={`transition-all duration-300 rounded-full ${activeIndex === i
                            ? 'w-5 h-1 bg-accent shadow-glow-cyan'
                            : 'w-1 h-1 bg-white/25 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Snap Scrolling Slider viewport */}
            <div
                ref={scrollContainerRef}
                className="relative z-10 w-full h-[100dvh] flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
                {sectionsData.map((section) => {
                    const Content = section.component;
                    return (
                        <section
                            key={section.id}
                            className="w-screen shrink-0 h-[100dvh] snap-center snap-always overflow-x-hidden flex flex-col"
                        >
                            <Content />
                        </section>
                    );
                })}
            </div>

            {/* Mobile bottom footer with social anchors */}
            <MobileFooter />
        </div>
    );
}
