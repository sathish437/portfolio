import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useOS } from '../../context/OSContext';
import AppWindow from './AppWindow';
import { portfolioData } from '../../utils/portfolioData';
import CategorizedProjects from '../shared/CategorizedProjects';
import SkillsSection from '../shared/skills/SkillsSection';
import AboutSection from '../shared/AboutSection';
import ContactSection from '../shared/ContactSection';

const windowContent = {
    about: () => (
        <div className="p-7 overflow-y-auto max-h-[450px] no-scrollbar">
            <AboutSection variant="window" />
        </div>
    ),
    projects: () => (
        <div className="p-7 overflow-y-auto max-h-[450px] no-scrollbar">
            <CategorizedProjects />
        </div>
    ),
    skills: () => (
        <div className="p-7 overflow-y-auto max-h-[450px] no-scrollbar">
            <SkillsSection data={portfolioData.sections.skills} variant="window" />
        </div>
    ),
    contact: () => (
        <div className="p-7 overflow-y-auto max-h-[450px] no-scrollbar">
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
                    if (!Content) return null;
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
