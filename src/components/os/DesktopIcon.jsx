import React from 'react';
import { motion } from 'framer-motion';
import { useOS } from '../../context/OSContext';

export default function DesktopIcon({ id, label, icon }) {
    const { openWindow, searchQuery } = useOS();

    const isMatch = searchQuery && label.toLowerCase().includes(searchQuery.toLowerCase());

    return (
        <motion.div
            onClick={() => openWindow(id)}
            className="flex flex-col items-center gap-1.5 cursor-pointer group pointer-events-auto"
            whileHover={{ y: -2, scale: 1.015, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.94 }}
            animate={isMatch ? {
                scale: 1.25,
                zIndex: 100,
            } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
            {/* Circular Ring Wrap with dynamic neon glows on hover */}
            <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center
                border border-white/5 bg-white/[0.035] backdrop-blur-md
                transition-all duration-300 relative overflow-hidden shadow-inner-glow
                ${isMatch
                    ? 'border-accent shadow-[0_0_8px_rgba(0,242,254,0.3)] scale-105'
                    : 'group-hover:border-accent/20 group-hover:bg-white/[0.05] group-hover:shadow-md'
                }
            `}>
                {/* Background glow trail */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-accent-purple/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {typeof icon === 'string' && !icon.startsWith('data') && !icon.startsWith('/') && !icon.startsWith('http')
                    ? <span className="relative z-10 text-2xl">{icon}</span>
                    : <img src={icon} alt={label} className="relative z-10 w-8 h-8 object-contain filter drop-shadow-[0_2px_4px_rgba(0,242,254,0.06)] group-hover:scale-105 transition-transform" />
                }

                {/* Pulsing indicator under search matching */}
                {isMatch && (
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-accent/10 pointer-events-none rounded-2xl"
                    />
                )}
            </div>

            {/* Glowing legible labels */}
            <span className={`
                text-[9.5px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md transition-all duration-300 font-mono
                ${isMatch
                    ? 'text-accent bg-accent/5 border border-accent/35 shadow-sm'
                    : 'text-gray-text-muted group-hover:text-off-white'
                }
            `}>
                {label}
            </span>
        </motion.div>
    );
}
