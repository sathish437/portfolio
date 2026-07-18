import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Trailing ring spring configuration (light mass for smooth delay trail)
    const springConfig = { damping: 30, stiffness: 350, mass: 0.35 };
    const trailX = useSpring(cursorX, springConfig);
    const trailY = useSpring(cursorY, springConfig);

    const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'card'
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor);

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target) return;

            // Check if hovering clickable interactive targets
            const isClickable = target.closest('button') || 
                                target.closest('a') || 
                                target.closest('input') ||
                                target.closest('textarea') ||
                                target.closest('[role="button"]') ||
                                target.closest('.cursor-pointer');
                                
            // Check if hovering glass panels or cards for soft highlights
            const isCardElement = target.closest('.bg-white\\/\\[0\\.015\\]') || 
                                  target.closest('.border-white\\/\\[0\\.05\\]') ||
                                  target.closest('.rounded-2xl') ||
                                  target.closest('.rounded-xl') ||
                                  target.closest('.futuristic-glass') ||
                                  target.closest('.p-4');

            if (isClickable) {
                setCursorType('pointer');
            } else if (isCardElement) {
                setCursorType('card');
            } else {
                setCursorType('default');
            }
        };

        const handleMouseLeaveWindow = () => {
            setIsVisible(false);
        };

        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeaveWindow);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeaveWindow);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* 1. Core Pointer (Electric Cyan Dot) - instant GPU translate */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[99999] mix-blend-screen hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: 'transform',
                }}
                animate={{
                    scale: cursorType === 'pointer' ? 1.5 : 1,
                    backgroundColor: cursorType === 'pointer' ? '#9b5de5' : '#00f2fe',
                }}
            />

            {/* 2. Trailing Outer Ring (Neon Purple / Blue / Cyan Spring Glow) */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full border pointer-events-none z-[99998] mix-blend-screen hidden md:block"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: 'transform',
                }}
                animate={{
                    scale: cursorType === 'pointer' ? 2.4 : (cursorType === 'card' ? 1.6 : 1),
                    borderColor: cursorType === 'pointer' ? 'rgba(155, 93, 229, 0.4)' : (cursorType === 'card' ? 'rgba(0, 112, 243, 0.25)' : 'rgba(0, 242, 254, 0.15)'),
                    boxShadow: cursorType === 'pointer' 
                        ? '0 0 6px rgba(155, 93, 229, 0.2)' 
                        : (cursorType === 'card' ? '0 0 6px rgba(0, 112, 243, 0.12)' : '0 0 4px rgba(0, 242, 254, 0.06)'),
                    backgroundColor: cursorType === 'pointer' ? 'rgba(155, 93, 229, 0.04)' : 'rgba(0, 0, 0, 0)',
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            />
        </>
    );
}
