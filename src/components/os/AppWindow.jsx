import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import { useOS } from '../../context/OSContext';

export default function AppWindow({ id, title, children }) {
    const { closeWindow, toggleMinimize, toggleFullscreen, activeWindow, setActiveWindow, openWindows } = useOS();

    const isActive = activeWindow === id;
    const currentWindow = openWindows.find(w => w.id === id);
    const isFullScreen = currentWindow?.fullscreen;
    const isMinimized = currentWindow?.minimized;

    return (
        <motion.div
            drag={!isFullScreen && !isMinimized}
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{
                opacity: isMinimized ? 0 : (isActive ? 1 : 0.65),
                scale: isMinimized ? 0.85 : 1,
                y: isMinimized ? 50 : 0
            }}
            exit={{ opacity: 0, scale: 0.90, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onPointerDown={() => { if (!isMinimized) setActiveWindow(id); }}
            style={{
                zIndex: isMinimized ? -1 : (isActive ? 1000 : 100),
                pointerEvents: isMinimized ? 'none' : 'auto'
            }}
            className={`
                absolute backdrop-blur-3xl bg-background/95
                overflow-hidden shadow-[0_50px_140px_rgba(0,0,0,0.95)] border border-white/[0.03]
                ${isActive && !isMinimized ? 'ring-1 ring-accent/15' : ''}
                ${!isActive && !isMinimized ? 'grayscale-[0.8] blur-[1px]' : ''}
                ${isFullScreen
                    ? 'inset-0 w-full h-full rounded-none !transform-none flex flex-col z-[2000]'
                    : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] rounded-[32px]'
                }
                transition-[border-radius,width,height,inset,transform] duration-500
            `}
        >
            {/* Ambient Aura */}
            {isActive && !isFullScreen && !isMinimized && (
                <div className="absolute -inset-32 bg-accent/3 blur-[120px] pointer-events-none -z-10" />
            )}

            {/* Title Bar */}
            <div className="h-12 flex-shrink-0 bg-white/[0.005] flex items-center justify-between px-7 border-b border-white/[0.015] cursor-move active:cursor-grabbing">
                <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent shadow-[0_0_12px_rgba(150,130,115,0.7)]' : 'bg-accent-blue'}`} />
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-accent-light/30">{title}</span>
                </div>

                <div className="flex items-center gap-1.5">
                    {/* Minimize */}
                    <button
                        onClick={(e) => { e.stopPropagation(); toggleMinimize(id); }}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-yellow-500/20 text-accent-light/25 hover:text-yellow-400 transition-all duration-200"
                        title="Minimize"
                    >
                        <Minus size={13} />
                    </button>
                    {/* Close */}
                    <button
                        onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-500/20 text-accent-light/25 hover:text-red-400 transition-all duration-200"
                        title="Close"
                    >
                        <X size={13} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className={`bg-black/15 p-2.5 overflow-hidden ${isFullScreen ? 'flex-1 pb-28' : ''}`}>
                <div className={`overflow-y-auto no-scrollbar rounded-[24px] bg-smoky-black/30 w-full ${isFullScreen ? 'h-full' : 'max-h-[500px]'}`}>
                    {children}
                </div>
            </div>
        </motion.div>
    );
}
