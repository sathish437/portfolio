import { motion } from 'framer-motion';
import { 
    Code2, Layout, Server, Database, Wrench,
    Code, Zap, Palette, Wind, Sparkles, Leaf,
    GitBranch, Github, Package, FileText, Layers
} from 'lucide-react';
import { GradientCard } from './GradientCard';
import { AnimatedBadge } from './AnimatedBadge';
import { SkillProficiencyBar } from './SkillProficiencyBar';
import { BackgroundBlobs } from './BackgroundBlobs';

const categoryIcons = {
    "Programming Languages": Code2,
    "Frontend": Layout,
    "Backend": Server,
    "Database": Database,
    "Tools & DevOps": Wrench,
};

// Map skill icon names to lucide-react components
const skillIconMap = {
    Code: Code,
    Zap: Zap,
    Palette: Palette,
    Wind: Wind,
    Sparkles: Sparkles,
    Leaf: Leaf,
    Database: Database,
    Layers: Layers,
    GitBranch: GitBranch,
    Github: Github,
    Package: Package,
    FileText: FileText,
};

export default function SkillsGrid({ data }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div className="relative w-full max-w-2xl">
            {/* Main skills grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-content grid grid-cols-1 gap-6"
            >
                {data.categories.map((category, categoryIndex) => {
                    const CategoryIcon = categoryIcons[category.name] || Code2;

                    return (
                        <motion.div
                            key={category.name}
                            variants={itemVariants}
                            className="relative group"
                        >
                            {/* Category card wrapper */}
                            <div className="bg-surface/50 border border-accent/20 rounded-2xl p-5 hover:bg-white/[0.03] transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                                {/* Subtle Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                
                                {/* Category header */}
                                <div className="relative z-10 flex items-center gap-3 pb-4 border-b border-accent/20 mb-4">
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30 group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-300"
                                    >
                                        <CategoryIcon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-sm font-bold text-accent tracking-wide">
                                            {category.name}
                                        </h3>
                                        <div className="h-0.5 w-12 bg-accent/50 rounded-full mt-1" />
                                    </div>
                                </div>

                                {/* Skills list */}
                                <div className="flex flex-col gap-4">
                                    {category.items.map((skill, skillIndex) => {
                                        const SkillIcon = skillIconMap[skill.icon] || Code;
                                        const delay = categoryIndex * 0.1 + skillIndex * 0.05;

                                        return (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay, duration: 0.4 }}
                                                className={`relative group/skill p-3 rounded-lg transition-all duration-300 ${
                                                    skill.highlight
                                                        ? 'bg-accent/15 border border-accent/40'
                                                        : 'bg-white/[0.02] border border-accent/10 hover:bg-white/[0.04] hover:border-accent/25'
                                                }`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <motion.div
                                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                                        className={`flex-shrink-0 p-2 rounded-md transition-all duration-300 ${
                                                            skill.highlight
                                                                ? 'bg-accent/25 text-accent'
                                                                : 'bg-accent/10 text-accent/60 group-hover/skill:bg-accent/15 group-hover/skill:text-accent'
                                                        }`}
                                                    >
                                                        <SkillIcon className="w-4 h-4" strokeWidth={1.5} />
                                                    </motion.div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between gap-2 mb-2">
                                                            <span className={`text-sm font-bold tracking-wide ${
                                                                skill.highlight ? 'text-accent' : 'text-off-white/80'
                                                            }`}>
                                                                {skill.name}
                                                            </span>
                                                            {skill.highlight && (
                                                                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/25 text-accent font-semibold">
                                                                    Expert
                                                                </span>
                                                            )}
                                                        </div>
                                                        {skill.desc && (
                                                            <p className="text-xs text-off-white/60 mb-2">
                                                                {skill.desc}
                                                            </p>
                                                        )}
                                                        {skill.proficiency && (
                                                            <SkillProficiencyBar
                                                                proficiency={skill.proficiency}
                                                                variant="accent"
                                                                showLabel={false}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Tech stack visual selector */}
                                <div className="relative z-10 mt-auto pt-4 border-t border-accent/20">
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.slice(0, 3).map((skill) => (
                                            <AnimatedBadge
                                                key={`badge-${skill.name}`}
                                                label={skill.name}
                                                variant="accent"
                                                size="sm"
                                                interactive={true}
                                            />
                                        ))}
                                        {category.items.length > 3 && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="px-2 py-1 rounded-full text-xs text-accent/60 font-semibold"
                                            >
                                                +{category.items.length - 3}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

