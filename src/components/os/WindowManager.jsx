import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useOS } from '../../context/OSContext';
import AppWindow from './AppWindow';
import { portfolioData } from '../../utils/portfolioData';
import ProjectCard from '../shared/ProjectCard'; // Kept for other potential uses or removed if certain
import CategorizedProjects from '../shared/CategorizedProjects';
import SkillsGrid from '../shared/SkillsGrid';
import ContactSection from '../shared/ContactSection';

const windowContent = {
    about: () => (
        <div className="p-7">
            <h2 className="text-2xl font-black mb-5 tracking-tight uppercase text-off-white">About <span className="text-accent">Me</span></h2>
            <p className="text-accent-light/50 leading-relaxed mb-6 font-medium">
                {portfolioData.sections.about.intro}
            </p>
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-xl px-4 py-2 mb-6">
                <p className="text-accent text-sm font-bold tracking-wide">{portfolioData.sections.about.techHighlight}</p>
            </div>
            <div className="bg-white/[0.005] border border-white/[0.015] rounded-2xl p-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-accent mb-3">Mission</h3>
                <p className="text-accent-light/40 text-sm leading-relaxed">{portfolioData.sections.about.statement}</p>
            </div>
        </div>
    ),
    projects: () => (
        <div className="p-7 overflow-y-auto max-h-[450px] no-scrollbar">
            <h2 className="text-2xl font-black mb-6 tracking-tight uppercase text-off-white">Work <span className="text-accent">Gallery</span></h2>
            <CategorizedProjects />
        </div>
    ),
    skills: () => (
        <div className="p-7 overflow-y-auto max-h-[450px] no-scrollbar">
            <h2 className="text-2xl font-black mb-8 tracking-tight text-accent uppercase text-left">Expertise</h2>
            <SkillsGrid data={portfolioData.sections.skills} />
        </div>
    ),
    contact: () => (
        <div className="p-7 overflow-y-auto max-h-[450px] no-scrollbar">
            <h2 className="text-2xl font-black mb-8 tracking-tight uppercase text-off-white">Let's <span className="text-accent">Sync</span></h2>
            <ContactSection data={portfolioData.sections.contact} />
        </div>
    )
};

export default function WindowManager() {
    const { openWindows } = useOS();

    return (
        <div className="absolute inset-0 pointer-events-none">
            <AnimatePresence>
                {openWindows.map((win) => {
                    const Content = windowContent[win.id];
                    return (
                        <AppWindow key={win.id} id={win.id} title={win.id.charAt(0).toUpperCase() + win.id.slice(1)}>
                            <Content />
                        </AppWindow>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
