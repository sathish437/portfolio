import { motion } from 'framer-motion';
import { clsx } from 'clsx';

/**
 * AnimatedBadge - Reusable animated badge for skills, tech stack, etc.
 * @param {Object} props
 * @param {string} props.label - Badge text
 * @param {React.ReactNode} props.icon - Optional icon component
 * @param {string} props.variant - 'cool' or 'warm' for color scheme
 * @param {boolean} props.interactive - Enable hover animations
 * @param {string} props.size - 'sm', 'md', 'lg'
 * @param {string} props.className - Additional Tailwind classes
 */
export const AnimatedBadge = ({
    label,
    icon,
    variant = 'cool',
    interactive = true,
    size = 'md',
    className = '',
}) => {
    const sizeStyles = {
        sm: 'px-2.5 py-1 text-xs gap-1',
        md: 'px-3 py-1.5 text-sm gap-1.5',
        lg: 'px-4 py-2 text-base gap-2',
    };

    const variantStyles = {
        cool: {
            bg: 'bg-cyan-500/15 hover:bg-cyan-500/25',
            border: 'border-cyan-400/30 hover:border-cyan-400/60',
            text: 'text-cyan-200',
            icon: 'text-cyan-300',
        },
        warm: {
            bg: 'bg-pink-500/15 hover:bg-pink-500/25',
            border: 'border-pink-400/30 hover:border-pink-400/60',
            text: 'text-pink-200',
            icon: 'text-pink-300',
        },
        accent: {
            bg: 'bg-accent/15 hover:bg-accent/25',
            border: 'border-accent/30 hover:border-accent/60',
            text: 'text-accent',
            icon: 'text-accent',
        },
    };

    const style = variantStyles[variant] || variantStyles.cool;
    const sizeClass = sizeStyles[size] || sizeStyles.md;

    return (
        <motion.div
            whileHover={interactive ? { scale: 1.05, y: -2 } : {}}
            whileTap={interactive ? { scale: 0.95 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={clsx(
                'inline-flex items-center gap-2 rounded-full border backdrop-blur-sm transition-all duration-300',
                sizeClass,
                style.bg,
                style.border,
                style.text,
                className
            )}
        >
            {icon && (
                <motion.div
                    whileHover={interactive ? { scale: 1.2, rotate: 5 } : {}}
                    className={clsx('flex-shrink-0', style.icon)}
                >
                    {icon}
                </motion.div>
            )}
            <span className="font-medium">{label}</span>
        </motion.div>
    );
};
