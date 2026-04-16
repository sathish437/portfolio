import { motion } from 'framer-motion';
import { clsx } from 'clsx';

/**
 * SkillProficiencyBar - Minimal linear proficiency indicator
 * @param {Object} props
 * @param {number} props.proficiency - Proficiency level (0-100)
 * @param {string} props.variant - 'cool' or 'warm' for color scheme
 * @param {boolean} props.showLabel - Show percentage text label
 */
export const SkillProficiencyBar = ({
    proficiency = 75,
    variant = 'cool',
    showLabel = true,
}) => {
    const barColors = {
        cool: {
            bg: 'bg-cyan-500/20',
            fill: 'bg-gradient-to-r from-cyan-400 to-blue-500',
        },
        warm: {
            bg: 'bg-pink-500/20',
            fill: 'bg-gradient-to-r from-pink-400 to-orange-500',
        },
        accent: {
            bg: 'bg-accent/20',
            fill: 'bg-accent',
        },
    };

    const colors = barColors[variant] || barColors.cool;

    return (
        <div className="w-full space-y-1">
            <div className={clsx('w-full h-1.5 rounded-full overflow-hidden', colors.bg)}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${proficiency}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={clsx('h-full rounded-full', colors.fill)}
                />
            </div>
            {showLabel && (
                <div className="text-xs text-off-white/60">
                    {proficiency}%
                </div>
            )}
        </div>
    );
};
