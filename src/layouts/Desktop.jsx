import React from 'react';
import DesktopIcon from '../components/os/DesktopIcon';
import WindowManager from '../components/os/WindowManager';
import Taskbar from '../components/taskbar/Taskbar';
import { portfolioData } from '../utils/portfolioData';
import { motion } from 'framer-motion';
import bgImage from '../bg.jpeg';
import contect from '../img/contact.png'
import about from '../img/about.png'
import projects from '../img/projects.png'
import skills from '../img/skills.png'

export default function Desktop() {
    const icons = [
        { id: 'about', label: 'About', icon: about },
        { id: 'projects', label: 'Projects', icon: projects },
        { id: 'skills', label: 'Skills', icon: skills },
        { id: 'contact', label: 'Contact', icon: contect },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="h-screen w-screen overflow-hidden relative font-sans text-off-white select-none bg-background">
            {/* Background - Master Moody Luxury */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Master Vignette & Espresso Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_100%)]" />
                <div className="absolute inset-0 bg-background/35" />
            </motion.div>

            {/* Ambient Depth Lighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-0 left-0 w-full h-full bg-accent/3 blur-[120px]"
                />
            </div>

            {/* Icons (Master Staggered Entrance) */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-10 left-10 z-[100] p-6"
            >
                <div className="grid grid-cols-2 gap-10">
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


