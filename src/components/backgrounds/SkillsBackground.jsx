import { motion } from 'framer-motion';

/**
 * SkillsBackground - Simple flowing energy streaks
 * Technical and dynamic feel
 */
export default function SkillsBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large energy streak 1 */}
            <motion.div
                animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 0.6, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute top-1/4 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent blur-[4px]"
            />
            
            {/* Large energy streak 2 */}
            <motion.div
                animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 2,
                }}
                className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent/35 to-transparent blur-[3px]"
            />
            
            {/* Large energy streak 3 */}
            <motion.div
                animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 0.4, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 4,
                }}
                className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-[2px]"
            />
            
            {/* Large vertical energy streak */}
            <motion.div
                animate={{
                    y: ['-100%', '100%'],
                    opacity: [0, 0.4, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                }}
                className="absolute top-0 left-1/3 w-1.5 h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent blur-[3px]"
            />
            
            {/* Large diagonal energy streak */}
            <motion.div
                animate={{
                    x: ['-100%', '100%'],
                    y: ['-50%', '50%'],
                    opacity: [0, 0.35, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 3,
                }}
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/25 to-transparent blur-[2px] rotate-45"
            />
            
            {/* Large particle 1 */}
            <motion.div
                animate={{
                    x: [0, 300, 0],
                    y: [0, -150, 0],
                    opacity: [0, 0.7, 0],
                    scale: [0, 1.5, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/3 left-1/4 w-4 h-4 bg-accent/50 rounded-full blur-[4px]"
            />
            
            {/* Large particle 2 */}
            <motion.div
                animate={{
                    x: [0, -250, 0],
                    y: [0, 120, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.3, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/45 rounded-full blur-[3px]"
            />
            
            {/* Large particle 3 */}
            <motion.div
                animate={{
                    x: [0, 200, 0],
                    y: [0, -100, 0],
                    opacity: [0, 0.5, 0],
                    scale: [0, 1.2, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
                className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-accent/40 rounded-full blur-[3px]"
            />
            
            {/* Large particle 4 */}
            <motion.div
                animate={{
                    x: [0, -180, 0],
                    y: [0, 80, 0],
                    opacity: [0, 0.4, 0],
                    scale: [0, 1, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
                className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/35 rounded-full blur-[2px]"
            />
            
            {/* Large central glow */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
            />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(150,130,115,0.4) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(150,130,115,0.4) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px'
            }} />
        </div>
    );
}
