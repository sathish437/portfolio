import { motion } from 'framer-motion';
import {
    Code2, Layout, Server, Database, Wrench,
    Code, Zap, Palette, Wind, Sparkles, Leaf,
    Github, Package, FileText, Layers, Globe,
    Box, RefreshCw
} from 'lucide-react';

const categoryIcons = {
    "Programming Languages": Code2,
    "Frontend": Layout,
    "Backend": Server,
    "Database": Database,
    "Tools & DevOps": Wrench,
};

const skillIconMap = {
    Code: Code,
    Zap: Zap,
    Palette: Palette,
    Wind: Wind,
    Sparkles: Sparkles,
    Leaf: Leaf,
    Database: Database,
    Layers: Layers,
    Github: Github,
    Package: Package,
    FileText: FileText,
    Globe: Globe,
    Box: Box,
    RefreshCw: RefreshCw,
    Python: Code,
};

// Get glow intensity based on proficiency
const getGlowIntensity = (proficiency) => {
    if (proficiency >= 90) return 'shadow-[0_0_20px_rgba(150,130,115,0.5)]';
    if (proficiency >= 75) return 'shadow-[0_0_15px_rgba(150,130,115,0.4)]';
    if (proficiency >= 60) return 'shadow-[0_0_10px_rgba(150,130,115,0.3)]';
    return 'shadow-[0_0_5px_rgba(150,130,115,0.2)]';
};

export default function SkillsGrid({ data }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const skillCardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none touch-none" />
            <div className="absolute top-1/2 -right-20 w-48 h-48 bg-accent/3 rounded-full blur-3xl pointer-events-none touch-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-content flex flex-col gap-10"
            >
                {data.categories.map((category, categoryIndex) => {
                    const CategoryIcon = categoryIcons[category.name] || Code2;

                    return (
                        <motion.div
                            key={category.name}
                            variants={categoryVariants}
                            className="relative"
                        >
                            {/* Category Header with Gradient Glow */}
                            <div className="flex items-center gap-3 mb-5">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: 10 }}
                                    className="relative w-12 h-12 rounded-2xl bg-accent/10 border border-accent/40 flex items-center justify-center shadow-lg shadow-accent/10"
                                >
                                    {/* Inner glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
                                    <CategoryIcon className="w-6 h-6 text-accent relative z-10" strokeWidth={1.5} />
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-black tracking-tight">
                                        <span className="bg-gradient-to-r from-accent via-off-white to-accent bg-clip-text text-transparent">
                                            {category.name}
                                        </span>
                                    </h3>
                                    <div className="h-0.5 w-32 bg-gradient-to-r from-accent/60 via-accent/30 to-transparent rounded-full mt-2" />
                                </div>
                            </div>

                            {/* Skills Cards - Energy Pill Style */}
                            <div className="flex flex-col gap-4">
                                {category.items.map((skill, skillIndex) => {
                                    const SkillIcon = skillIconMap[skill.icon] || Code;
                                    const proficiency = skill.proficiency || 50;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            custom={skillIndex}
                                            variants={skillCardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className={`relative group rounded-2xl p-5 border backdrop-blur-sm transition-all duration-300 ${
                                                skill.highlight
                                                    ? 'bg-accent/5 border-accent/40 shadow-lg shadow-accent/10'
                                                    : 'bg-white/[0.02] border-accent/10 hover:bg-white/[0.04] hover:border-accent/25'
                                            }`}
                                        >
                                            {/* Inner Glow on Hover */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${getGlowIntensity(proficiency)}`} />

                                            <div className="relative z-10 flex flex-col gap-3">
                                                {/* Top Row: Icon + Name */}
                                                <div className="flex items-center gap-3">
                                                    <motion.div
                                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                                        className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                            skill.highlight
                                                                ? 'bg-accent/30 text-accent shadow-inner shadow-accent/20'
                                                                : 'bg-accent/10 text-accent/80 group-hover:bg-accent/20 group-hover:text-accent'
                                                        }`}
                                                    >
                                                        <SkillIcon className="w-4 h-4" strokeWidth={1.5} />
                                                    </motion.div>

                                                    <span className={`text-sm font-bold tracking-wide transition-colors ${
                                                        skill.highlight ? 'text-accent' : 'text-off-white/90 group-hover:text-accent'
                                                    }`}>
                                                        {skill.name}
                                                    </span>

                                                    {skill.highlight && (
                                                        <motion.span
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: 0.5 + skillIndex * 0.1, type: 'spring' }}
                                                            className="ml-auto text-[10px] px-2 py-1 rounded-full bg-accent/20 text-accent font-bold border border-accent/40"
                                                        >
                                                            Expert
                                                        </motion.span>
                                                    )}
                                                </div>

                                                {/* Energy Pill - Skill Meter */}
                                                <div className="relative">
                                                    {/* Pill Background Track */}
                                                    <div className="h-3 w-full rounded-full bg-accent/10 border border-accent/10 overflow-hidden relative">
                                                        {/* Animated Fill */}
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${proficiency}%` }}
                                                            transition={{
                                                                duration: 1.2,
                                                                delay: 0.3 + skillIndex * 0.15,
                                                                ease: [0.16, 1, 0.3, 1]
                                                            }}
                                                            className="h-full relative"
                                                        >
                                                            {/* Gradient Fill */}
                                                            <div className="absolute inset-0 bg-gradient-to-r from-accent/60 via-accent to-accent/80 rounded-full" />

                                                            {/* Animated Shimmer Flow */}
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                                                                initial={{ x: '-100%' }}
                                                                animate={{ x: '200%' }}
                                                                transition={{
                                                                    duration: 2.5,
                                                                    repeat: Infinity,
                                                                    ease: 'linear',
                                                                    repeatDelay: 1
                                                                }}
                                                            />

                                                            {/* Glow Effect on Fill */}
                                                            <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(150,130,115,0.6)]" />
                                                        </motion.div>
                                                    </div>

                                                    {/* Outer Glow Ring on Hover */}
                                                    <motion.div
                                                        className="absolute -inset-1 rounded-full bg-accent/0 group-hover:bg-accent/20 blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                                                    />
                                                </div>

                                                {/* Description */}
                                                {skill.desc && (
                                                    <p className="text-xs text-off-white/40 group-hover:text-off-white/60 transition-colors">
                                                        {skill.desc}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

