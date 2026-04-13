import React, { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../utils/portfolioData';
import CategorizedProjects from '../components/shared/CategorizedProjects';
import SkillsGrid from '../components/shared/SkillsGrid';
import ContactSection from '../components/shared/ContactSection';
import bgImage from '../bg.jpeg';
import MobileFooter from '../components/mobile/MobileFooter';

const sectionsData = [
    {
        id: 'intro',
        component: () => (
            <div className="relative w-full h-[100dvh] flex flex-col items-center justify-center p-8 pt-[280px] text-center overflow-hidden">
                {/* Background exclusively for landing page */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105 pointer-events-none -z-10"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_100%)]" />
                    <div className="absolute inset-0 bg-background/35" />
                </div>

                {/* Minimal Landing Screen */}
                <h1 className="text-5xl font-black mb-3 leading-none tracking-tighter uppercase text-accent drop-shadow-md relative z-10">
                    {portfolioData.profile.name.split(' ')[0]}<br />
                    <span className="text-accent drop-shadow-lg">{portfolioData.profile.name.split(' ')[1]}</span>
                </h1>
                <p className="text-[11px] font-black uppercase tracking-[0.6em] mb-4 relative z-10  bg-clip-text bg-gradient-to-br from-accent-light via-accent to-accent drop-shadow-[0_0_15px_rgba(150,130,115,0.4)]">{portfolioData.profile.role}</p>

                <div className="mt-12 flex flex-col items-center gap-3 animate-pulse relative z-10">
                    <div className="flex flex-col items-center gap-2 text-white px-5 py-2.5 ">
                        <span className="text-[10px] font-black uppercase tracking-widest">Swipe Left</span>
                        <div className="animate-bounce" style={{ animationDuration: '1.5s' }}><span className="text-lg leading-none">→</span></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'about',
        component: () => (
            <div className="px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto no-scrollbar bg-background">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full">
                    <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl mb-8 shadow-lg grayscale">📂</div>
                    <h2 className="text-3xl font-black mb-6 tracking-tight uppercase text-off-white">
                        About <span className="text-accent">Me</span>
                    </h2>
                    <p className="text-white/80 leading-snug text-[13px] mb-6 font-medium">
                        {portfolioData.sections.about.intro}
                    </p>
                    <div className="inline-block bg-accent/15 border border-accent/30 rounded-xl px-4 py-2 mb-6 w-max shadow-sm">
                        <p className="text-accent text-xs font-black tracking-wide">{portfolioData.sections.about.techHighlight}</p>
                    </div>
                    <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl mt-auto">
                        <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-accent mb-3 text-left">Mission</h3>
                        <p className="text-white/60 text-xs leading-relaxed text-left">{portfolioData.sections.about.statement}</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'skills',
        component: () => (
            <div className="px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto no-scrollbar bg-background">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full">
                    <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl mb-8 shadow-lg grayscale">💡</div>
                    <h2 className="text-3xl font-black mb-8 tracking-tight text-accent uppercase">Expertise</h2>
                    <div className="flex-1 w-full pb-4">
                        <SkillsGrid data={portfolioData.sections.skills} />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'projects',
        component: () => (
            <div className="px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto no-scrollbar bg-background">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full">
                    <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl mb-8 shadow-lg grayscale">💻</div>
                    <h2 className="text-3xl font-black mb-8 tracking-tight uppercase text-off-white">
                        Work <span className="text-accent">Gallery</span>
                    </h2>
                    <div className="flex-1 pb-4">
                        <CategorizedProjects />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'contact',
        component: () => (
            <div className="px-6 pb-28 pt-20 h-[100dvh] w-full overflow-y-auto no-scrollbar bg-background">
                <div className="max-w-lg mx-auto w-full flex flex-col min-h-full">
                    <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl mb-8 shadow-lg grayscale">📞</div>
                    <h2 className="text-3xl font-black mb-8 tracking-tight uppercase text-off-white">
                        Let's <span className="text-accent">Sync</span>
                    </h2>
                    <div className="flex-1 w-full pb-4">
                        <ContactSection data={portfolioData.sections.contact} />
                    </div>
                </div>
            </div>
        )
    }
];

export default function MobileLayout() {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Track scroll position to update dots
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
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative h-[100dvh] w-screen bg-background overflow-hidden font-sans text-off-white theme-dark">
            {/* Pagination Dots (Top Area) */}
            <div className="absolute top-6 left-0 right-0 z-[100] flex justify-center gap-2.5">
                {sectionsData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToSlide(i)}
                        className={`transition-all duration-300 rounded-full ${activeIndex === i
                            ? 'w-6 h-1.5 bg-accent shadow-[0_0_10px_rgba(150,130,115,0.6)]'
                            : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Horizontal Swipe Container */}
            <div
                ref={scrollContainerRef}
                className="relative z-10 w-full h-[100dvh] flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
                {sectionsData.map((section) => {
                    const Content = section.component;
                    return (
                        <section
                            key={section.id}
                            className="w-screen shrink-0 h-[100dvh] snap-center overflow-x-hidden flex flex-col"
                        >
                            <Content />
                        </section>
                    );
                })}
            </div>

            <MobileFooter />
        </div>
    );
}
