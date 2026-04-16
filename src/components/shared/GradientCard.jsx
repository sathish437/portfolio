import { motion } from 'framer-motion';
import { clsx } from 'clsx';

/**
 * GradientCard - Reusable card component with gradient border and glow effects
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - 'cool' (blue/cyan) or 'warm' (purple/orange)
 * @param {boolean} props.glow - Enable glow effect on hover
 * @param {boolean} props.featured - Featured/highlight variant styling
 * @param {string} props.className - Additional Tailwind classes
 * @param {Object} props.hoverEffect - Motion effect on hover (e.g., { scale: 1.02, y: -2 })
 */
export const GradientCard = ({
    children,
    variant = 'cool',
    glow = true,
    featured = false,
    className = '',
    hoverEffect = { scale: 1.02 },
}) => {
    const variantStyles = {
        cool: {
            border: 'border-cyan-500/20',
            bg: 'bg-gradient-cool-subtle',
            glow: 'shadow-glow-md',
            hover: 'hover:shadow-glow-lg hover:border-cyan-400/40',
        },
        warm: {
            border: 'border-pink-500/20',
            bg: 'bg-gradient-warm-subtle',
            glow: 'shadow-glow-warm-md',
            hover: 'hover:shadow-glow-warm-lg hover:border-pink-400/40',
        },
    };

    const style = variantStyles[variant] || variantStyles.cool;

    return (
        <motion.div
            whileHover={hoverEffect}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={clsx(
                'relative p-5 rounded-lg border backdrop-blur-md transition-all duration-300',
                style.border,
                style.bg,
                glow && style.glow,
                style.hover,
                featured && 'ring-2 ring-accent/40',
                className
            )}
        >
            {/* Inner subtle glow overlay */}
            <div className="absolute inset-0 rounded-lg shadow-inner-glow pointer-events-none opacity-50" />

            {/* Content layer */}
            <div className="relative z-content">
                {children}
            </div>
        </motion.div>
    );
};
