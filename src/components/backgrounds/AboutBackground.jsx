import { motion } from 'framer-motion';

/**
 * AboutBackground - Simple flowing gradients
 * Personal, calm, and elegant feel
 */
export default function AboutBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large primary flowing gradient */}
            <motion.div
                animate={{
                    x: [0, 200, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"
            />
            
            {/* Large secondary flowing gradient */}
            <motion.div
                animate={{
                    x: [0, -150, 0],
                    y: [0, 120, 0],
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[140px]"
            />
            
            {/* Horizontal flowing ribbon */}
            <motion.div
                animate={{
                    x: [-200, 200, -200],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
                className="absolute top-1/2 left-0 right-0 h-32 bg-gradient-to-r from-transparent via-accent/4 to-transparent blur-[60px]"
            />
            
            {/* Corner accent glow */}
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
                className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-[120px]"
            />
        </div>
    );
}
