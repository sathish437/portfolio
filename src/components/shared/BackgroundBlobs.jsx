import { motion } from 'framer-motion';

/**
 * BackgroundBlobs - Floating decorative SVG blob elements
 * @param {Object} props
 * @param {string} props.variant - 'cool' (blues/cyans) or 'warm' (purples/oranges)
 * @param {number} props.opacity - Opacity level (0-100), default 10
 * @param {number} props.count - Number of blobs to render
 */
export const BackgroundBlobs = ({
    variant = 'cool',
    opacity = 10,
    count = 3,
}) => {
    const colors = {
        cool: ['#0ea5e9', '#06b6d4', '#3b82f6'],
        warm: ['#d946ef', '#ec4899', '#f97316'],
    };

    const selectedColors = colors[variant] || colors.cool;
    const opacityValue = opacity / 100;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-blob-base">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    initial={{
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                    }}
                    animate={{
                        x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                        y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                    }}
                    transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        width: `${200 + i * 100}px`,
                        height: `${200 + i * 100}px`,
                        backgroundColor: selectedColors[i % selectedColors.length],
                        opacity: opacityValue,
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                    }}
                />
            ))}
        </div>
    );
};
