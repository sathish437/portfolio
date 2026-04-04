import React from 'react';
import { motion } from 'framer-motion';
import { useOS } from '../../context/OSContext';

export default function DesktopIcon({ id, label, icon }) {
    const { openWindow, searchQuery } = useOS();

    const isMatch = searchQuery && label.toLowerCase().includes(searchQuery.toLowerCase());

    return (
        <motion.div
            onClick={() => openWindow(id)}
            className="flex flex-col items-center gap-0 cursor-pointer group"
            whileHover={{ y: -5, rotateX: 5, rotateY: 5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.96 }}
            animate={isMatch ? {
                scale: 1.4,
                zIndex: 100,
            } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
            {/* Icon - image only, no background */}
            <div className={`
                relative w-30 h-30 rounded-[30px] flex items-center justify-center
                transition-all duration-300
                ${isMatch
                    ? 'ring-2 ring-white/60 rounded-[20px]'
                    : 'group-hover:scale-105 group-hover:-translate-y-1'
                }
            `}>
                {typeof icon === 'string' && !icon.startsWith('data') && !icon.startsWith('/') && !icon.startsWith('http')
                    ? <span className="relative z-10 text-4xl">{icon}</span>
                    : <img src={icon} alt={label} className="relative z-10 w-16 h-16 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]" />
                }

                {/* Search match glow */}
                {isMatch && (
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.4, 0.15] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute inset-x-2 bottom-0 h-1 bg-white/80 blur-sm rounded-full pointer-events-none"
                    />
                )}
            </div>

            {/* Dark readable label */}
            <span className={`
                text-[11px] font-bold tracking-wide px-4 py-2 rounded-md transition-all duration-300
                ${isMatch
                    ? 'text-white bg-black/30 backdrop-blur-sm'
                    : 'text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]'
                }
            `}>
                {label}
            </span>
        </motion.div>
    );
}
