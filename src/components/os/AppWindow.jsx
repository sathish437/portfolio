import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Terminal } from 'lucide-react';
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
                opacity: isMinimized ? 0 : (isActive ? 1 : 0.8),
                scale: isMinimized ? 0.85 : 1,
                y: isMinimized ? 50 : 0,
            }}
            exit={{ opacity: 0, scale: 0.90, y: 20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onPointerDown={() => { if (!isMinimized) setActiveWindow(id); }}
            style={{
                zIndex: isMinimized ? -1 : (isActive ? 1000 : 100),
                pointerEvents: isMinimized ? 'none' : 'auto',
            }}
            className={`
                absolute backdrop-blur-3xl bg-[#09090b]/85
                overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.85)] border
                ${isActive && !isMinimized 
                    ? 'border-accent/30 shadow-glow-cyan-sm ring-1 ring-accent/15' 
                    : 'border-white/[0.05]'
                }
                ${!isActive && !isMinimized ? 'opacity-85' : ''}
                ${isFullScreen
                    ? 'inset-0 w-full h-full rounded-none !transform-none flex flex-col z-[2000]'
                    : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[590px] rounded-[24px]'
                }
                transition-[border-radius,width,height,inset,transform,border-color,box-shadow] duration-500
            `}
        >
            {/* Soft inner glow behind content */}
            {isActive && !isFullScreen && !isMinimized && (
                <div className="absolute -inset-32 bg-gradient-to-br from-accent/5 to-accent-purple/5 blur-[100px] pointer-events-none -z-10" />
            )}

            {/* Window Header */}
            <div className="h-12 flex-shrink-0 bg-white/[0.015] flex items-center justify-between px-6 border-b border-white/[0.06] cursor-move active:cursor-grabbing select-none">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-accent">
                        <Terminal size={11} className={isActive ? 'animate-pulse' : ''} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-off-white/80">
                        {title}
                    </span>
                    <span className="text-[8px] font-mono text-accent-light/40 font-bold px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                        PID {Math.floor(1000 + (id.charCodeAt(0) * 8))}
                    </span>
                </div>

                {/* Window Operations controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); toggleMinimize(id); }}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.02] hover:bg-yellow-500/10 text-gray-text-muted hover:text-yellow-400 border border-white/[0.04] hover:border-yellow-500/25 transition-all duration-200"
                        title="Minimize Node"
                    >
                        <Minus size={12} strokeWidth={2} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.02] hover:bg-red-500/10 text-gray-text-muted hover:text-red-400 border border-white/[0.04] hover:border-red-500/25 transition-all duration-200"
                        title="Shutdown Connection"
                    >
                        <X size={12} strokeWidth={2} />
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className={`p-3 bg-black/10 overflow-hidden ${isFullScreen ? 'flex-1 pb-28' : ''}`}>
                <div className={`overflow-y-auto no-scrollbar rounded-[16px] bg-[#050505]/40 w-full ${isFullScreen ? 'h-full' : 'max-h-[480px]'}`}>
                    {children}
                </div>
            </div>
        </motion.div>
    );
}
