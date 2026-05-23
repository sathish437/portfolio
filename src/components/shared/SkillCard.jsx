import { motion } from 'framer-motion';
import {
    Code, Zap, Palette, Wind, Sparkles, Leaf,
    Github, Package, FileText, Layers, Globe,
    Box, RefreshCw, Database, Code2, Server
} from 'lucide-react';

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
    Code2: Code2,
    Server: Server,
};

const categoryDescriptions = {
    "Programming Languages": "Core backend programming",
    "Frontend": "Modern frontend UI",
    "Backend": "Scalable backend framework",
    "Database": "Data persistence & queries",
    "Tools & DevOps": "Development & deployment tools",
};

const skillDescriptions = {
    "Java": "OOP & Collections",
    "Python": "Scripting & basics",
    "HTML5": "Semantic markup",
    "CSS3": "Styling & layout",
    "JavaScript": "ES6+ interactivity",
    "Tailwind CSS": "Utility-first styling",
    "React.js": "Components & Hooks",
    "Spring Boot": "REST API framework",
    "Hibernate / JPA": "ORM persistence",
    "Spring MVC": "Web framework",
    "RESTful APIs": "Web service design",
    "Spring Data JPA": "Data access layer",
    "MySQL": "Relational database",
    "PostgreSQL": "Advanced SQL",
    "GitHub": "Version control",
    "Postman": "API testing",
    "Maven": "Build automation",
    "Swagger": "API documentation",
    "Docker": "Containerization",
    "CI/CD (GitHub Actions)": "Automation pipeline",
};

export default function SkillCard({
    skill,
    category,
    index,
    isProfessional = false,
    isCompact = false,
}) {
    const SkillIcon = skillIconMap[skill.icon] || Code;
    const proficiency = skill.proficiency || 50;
    const description = skill.desc || skillDescriptions[skill.name] || categoryDescriptions[category] || "Technical skill";

    // Determine card styling based on proficiency/highlight
    const isPremium = skill.highlight || proficiency >= 80;
    
    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
    };

    const hoverVariants = {
        scale: 1.03,
        y: -3,
        transition: { type: 'spring', stiffness: 280, damping: 28 },
    };

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={hoverVariants}
            className="relative group h-full"
        >
            {/* Animated Glow Background (subtle hover glow) */}
            <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none ${
                isPremium
                    ? 'bg-gradient-to-r from-accent/20 to-accent/10 blur-sm'
                    : 'bg-gradient-to-r from-accent/10 to-transparent blur-sm'
            }`} />

            {/* Card Container */}
            <div className={`relative h-full rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col gap-3 ${
                isCompact ? 'p-4' : 'p-5 gap-4'
            } ${
                isPremium
                    ? 'bg-accent/[0.04] border-accent/20 shadow-[0_4px_12px_rgba(150,130,115,0.06)]'
                    : 'bg-white/[0.015] border-white/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.05)]'
            } group-hover:border-accent/30 group-hover:shadow-[0_6px_16px_rgba(150,130,115,0.1)]`}> 

                {/* Inner Gradient Overlay on Hover (highly subtle) */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3 h-full">
                    {/* Icon */}
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        className={`transition-all duration-300 flex items-center justify-center flex-shrink-0 rounded-xl ${isCompact ? 'w-10 h-10' : 'w-12 h-12' } ${
                            isPremium
                                ? 'bg-accent/20 text-accent border border-accent/20'
                                : 'bg-white/[0.04] text-accent-light/60 border border-white/[0.05] group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/15'
                        }`}
                    >
                        <SkillIcon className={`${isCompact ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={1.5} />
                    </motion.div>

                    {/* Title & Badge */}
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <h3 className={`font-bold tracking-tight text-sm transition-colors ${
                                isPremium
                                    ? (isCompact ? 'text-accent text-sm' : 'text-accent text-base')
                                    : (isCompact ? 'text-off-white/90 group-hover:text-accent text-sm' : 'text-off-white/90 group-hover:text-accent text-sm')
                            }`}>
                                {skill.name}
                            </h3>
                        </div>
                        
                        {!isCompact && isPremium && (
                            <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.08 }}
                                className="text-[10px] px-2 py-1 rounded-full bg-accent/25 text-accent font-bold border border-accent/50 whitespace-nowrap flex-shrink-0"
                            >
                                Expert
                            </motion.span>
                        )}
                    </div>

                    {/* Description */}
                    <p className={`text-xs leading-snug transition-colors ${
                        isPremium
                            ? 'text-accent/80'
                            : 'text-off-white/60 group-hover:text-off-white/70'
                    }`}>
                        {description}
                    </p>

                    {/* Category Tag */}
                    {!isCompact && (
                        <div className="mt-auto pt-2">
                            <span className={`inline-block text-[10px] px-2 py-1 rounded-full font-medium tracking-wide transition-all duration-300 ${
                                isPremium
                                    ? 'bg-accent/15 text-accent/90 border border-accent/30'
                                    : 'bg-accent/8 text-accent/70 border border-accent/15 group-hover:bg-accent/12 group-hover:text-accent/80'
                            }`}>
                                {category}
                            </span>
                        </div>
                    )}

                    {/* Proficiency Bar */}
                    {proficiency && (
                        <div className="mt-2 pt-2 border-t border-accent/10">
                            <div className={`relative ${isCompact ? 'h-1' : 'h-2'} w-full rounded-full bg-accent/10 border border-accent/15 overflow-hidden`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${proficiency}%` }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.4 + index * 0.08,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className={`h-full relative rounded-full ${
                                        isPremium
                                            ? 'bg-gradient-to-r from-accent/70 via-accent to-accent/80'
                                            : 'bg-gradient-to-r from-accent/50 via-accent/70 to-accent/60'
                                    }`}
                                >
                                    {/* Shimmer Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '200%' }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: 'linear',
                                            repeatDelay: 1.5
                                        }}
                                    />
                                </motion.div>
                            </div>
                            <p className="text-[9px] text-accent/60 mt-1 text-right">
                                {proficiency}%
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
