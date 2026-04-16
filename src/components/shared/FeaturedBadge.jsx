import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

/**
 * FeaturedBadge - Visual indicator for featured/highlighted projects
 * @param {Object} props
 * @param {string} props.label - Badge text (default: "Featured")
 * @param {boolean} props.showIcon - Show star icon
 */
export const FeaturedBadge = ({
    label = 'Featured',
    showIcon = true,
}) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            className="absolute -top-2 -right-2 z-overlay"
        >
            <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={clsx(
                    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full',
                    'bg-gradient-to-r from-accent to-yellow-500',
                    'border border-yellow-400/50',
                    'shadow-glow-warm-md backdrop-blur-md'
                )}
            >
                {showIcon && <Star className="w-4 h-4 text-white" />}
                <span className="text-xs font-bold text-white">{label}</span>
            </motion.div>
        </motion.div>
    );
};
