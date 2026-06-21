import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * InfiniteMarquee — premium auto-scrolling horizontal strip.
 *
 * Props:
 *   children   – the content to repeat
 *   speed      – px/s  (default 30 — slow & elegant)
 *   direction  – 'left' | 'right'
 *   pauseOnHover – true by default
 *   className  – extra wrapper classes
 */
export default function InfiniteMarquee({
    children,
    speed = 30,
    direction = 'left',
    pauseOnHover = true,
    className = '',
}) {
    const [paused, setPaused] = useState(false);
    const containerRef = useRef(null);

    // We duplicate the children strip to achieve the seamless loop
    const dirMultiplier = direction === 'left' ? -1 : 1;

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden relative ${className}`}
            onMouseEnter={() => pauseOnHover && setPaused(true)}
            onMouseLeave={() => pauseOnHover && setPaused(false)}
        >
            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-3 w-max"
                animate={{
                    x: [0, dirMultiplier * -50 + '%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 100 / (speed / 30),  // slower speed → longer duration
                        ease: 'linear',
                    },
                }}
                style={{
                    animationPlayState: paused ? 'paused' : 'running',
                }}
            >
                {/* First copy */}
                <div className="flex gap-3 shrink-0">{children}</div>
                {/* Second copy for seamless loop */}
                <div className="flex gap-3 shrink-0" aria-hidden>{children}</div>
            </motion.div>
        </div>
    );
}
