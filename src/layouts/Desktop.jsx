import React from 'react';
import DesktopIcon from '../components/os/DesktopIcon';
import WindowManager from '../components/os/WindowManager';
import Taskbar from '../components/taskbar/Taskbar';
import { portfolioData } from '../utils/portfolioData';
import { motion } from 'framer-motion';
import FuturisticBackground from '../components/backgrounds/FuturisticBackground';
import Hero from '../components/desktop/Hero';
import { useOS } from '../context/OSContext';

// Icons
import contact from '../img/contact.png';
import about from '../img/about.png';
import projects from '../img/projects.png';
import skills from '../img/skills.png';

export default function Desktop() {
    const { openWindow } = useOS();

    const icons = [
        { id: 'about', label: 'About', icon: about },
        { id: 'projects', label: 'Projects', icon: projects },
        { id: 'skills', label: 'Skills', icon: skills },
        { id: 'contact', label: 'Contact', icon: contact },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="h-screen w-screen overflow-hidden relative font-sans text-off-white select-none bg-background">
            {/* Dynamic Background System */}
            <FuturisticBackground />

            {/* Cinematic Hero Section Centerpiece */}
            <div className="absolute inset-0 flex items-center justify-center z-[50] pointer-events-none">
                <Hero onOpenWindow={openWindow} />
            </div>

            {/* Floating Desktop Deck (Staggered Entrance) */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-10 left-10 z-[100] p-4 bg-white/[0.01] border border-white/[0.04] rounded-[28px] backdrop-blur-md shadow-inner-glow"
            >
                <div className="flex flex-col gap-6">
                    {icons.map((icon) => (
                        <motion.div key={icon.id} variants={itemVariants}>
                            <DesktopIcon {...icon} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Window Layer */}
            <div className="relative z-[200]">
                <WindowManager />
            </div>

            {/* Taskbar (Cinematic Slide) */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed bottom-8 left-0 right-0 px-6 flex justify-center z-[1000]"
            >
                <Taskbar />
            </motion.div>
        </div>
    );
}
