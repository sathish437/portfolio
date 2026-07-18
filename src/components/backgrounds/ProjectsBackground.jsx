import { motion } from 'framer-motion';

/**
 * ProjectsBackground - Simple moving grid and floating panels
 * Structured and creative feel
 */
export default function ProjectsBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large moving grid layer 1 */}
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(150,130,115,0.5) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(150,130,115,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px'
                }}
            />
            
            {/* Large moving grid layer 2 - offset */}
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(150,130,115,0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(150,130,115,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}
            />
            
            {/* Large floating panel glow 1 */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -80, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-3xl blur-[120px]"
            />
            
            {/* Large floating panel glow 2 */}
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 3,
                }}
                className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-accent/4 rounded-3xl blur-[110px]"
            />
            
            {/* Large motion layer - horizontal drift */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/2"
            />
            
            {/* Large corner accent */}
            <motion.div
                animate={{
                    opacity: [0.15, 0.3, 0.15],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/4 to-transparent rounded-bl-full blur-[80px]"
            />
            
            {/* Large bottom accent */}
            <motion.div
                animate={{
                    opacity: [0.12, 0.25, 0.12],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-gradient-to-tr from-accent/3 to-transparent rounded-tr-full blur-[70px]"
            />
            
            {/* Large floating card 1 */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/4 left-1/4 w-48 h-32 bg-accent/3 rounded-2xl blur-[40px]"
            />
            
            {/* Large floating card 2 */}
            <motion.div
                animate={{
                    y: [0, 40, 0],
                    opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
                className="absolute bottom-1/3 right-1/4 w-40 h-28 bg-accent/2 rounded-2xl blur-[35px]"
            />
        </div>
    );
}
