import { motion } from 'framer-motion';

/**
 * ContactBackground - Simple orbit rings and pulse waves
 * Clean and interactive feel
 */
export default function ContactBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large central pulse glow */}
            <motion.div
                animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"
            />
            
            {/* Large orbit ring 1 */}
            <motion.div
                animate={{
                    rotate: 360,
                    opacity: [0.25, 0.4, 0.25],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border-2 border-accent/8 rounded-full"
            />
            
            {/* Large orbit ring 2 */}
            <motion.div
                animate={{
                    rotate: -360,
                    opacity: [0.2, 0.35, 0.2],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border-2 border-accent/6 rounded-full"
            />
            
            {/* Large orbit ring 3 */}
            <motion.div
                animate={{
                    rotate: 360,
                    opacity: [0.15, 0.3, 0.15],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 2,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent/5 rounded-full"
            />
            
            {/* Large orbit ring 4 */}
            <motion.div
                animate={{
                    rotate: -360,
                    opacity: [0.12, 0.25, 0.12],
                    scale: [1, 1.12, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 3,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-accent/4 rounded-full"
            />
            
            {/* Large floating connection dots */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/20 rounded-full blur-[2px]"
            />
            
            <motion.div
                animate={{
                    y: [0, 50, 0],
                    opacity: [0.35, 0.65, 0.35],
                    scale: [1, 1.25, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
                className="absolute bottom-1/4 right-1/4 w-3.5 h-3.5 bg-accent/18 rounded-full blur-[2px]"
            />
            
            <motion.div
                animate={{
                    y: [0, -35, 0],
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/16 rounded-full blur-[2px]"
            />
            
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    opacity: [0.25, 0.5, 0.25],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 3,
                }}
                className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-accent/14 rounded-full blur-[2px]"
            />
            
            {/* Large connection lines */}
            <motion.div
                animate={{
                    opacity: [0.15, 0.3, 0.15],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-accent/12 to-transparent blur-[2px]"
            />
            
            <motion.div
                animate={{
                    opacity: [0.12, 0.25, 0.12],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[800px] bg-gradient-to-b from-transparent via-accent/10 to-transparent blur-[2px]"
            />
            
            {/* Large pulse wave 1 */}
            <motion.div
                animate={{
                    scale: [1, 2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[80px]"
            />
            
            {/* Large pulse wave 2 */}
            <motion.div
                animate={{
                    scale: [1, 2.2, 1],
                    opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[70px]"
            />
            
            {/* Corner pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-10 right-10 w-48 h-48 bg-accent/4 rounded-full blur-[60px]"
            />
        </div>
    );
}
