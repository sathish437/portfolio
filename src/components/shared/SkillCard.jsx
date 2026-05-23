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
    const description = skill.desc || skillDescriptions[skill.name] || categoryDescriptions[category] || "Technical skill";
    const isPremium = !!skill.highlight;
    
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

    if (isCompact) {
        return (
            <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="relative group w-full max-w-full"
            >
                <div
                    className={`relative flex items-center gap-2.5 rounded-lg border backdrop-blur-sm px-2.5 py-2 transition-colors duration-200 ${
                        isPremium
                            ? 'bg-accent/[0.03] border-accent/15'
                            : 'bg-white/[0.012] border-white/[0.05]'
                    } group-hover:border-accent/15`}
                >
                    <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 ${
                            isPremium
                                ? 'bg-accent/15 text-accent border border-accent/15'
                                : 'bg-white/[0.03] text-accent/50 border border-white/[0.04]'
                        }`}
                    >
                        <SkillIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold text-xs truncate ${
                            isPremium ? 'text-accent' : 'text-off-white/85'
                        }`}>
                            {skill.name}
                        </h3>
                        <p className="text-[10px] text-off-white/45 truncate leading-tight mt-0.5">
                            {description}
                        </p>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
                scale: 1.02,
                y: -2,
                transition: { type: 'spring', stiffness: 280, damping: 28 },
            }}
            className="relative group h-full w-full"
        >
            {/* Animated Glow Background (subtle hover glow) */}
            <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${
                isPremium
                    ? 'bg-gradient-to-r from-accent/15 to-accent/5 blur-sm'
                    : 'bg-gradient-to-r from-accent/8 to-transparent blur-sm'
            }`} />

            {/* Card Container */}
            <div className={`relative h-full rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col gap-4 p-5 ${
                isPremium
                    ? 'bg-accent/[0.04] border-accent/20 shadow-[0_4px_12px_rgba(150,130,115,0.06)]'
                    : 'bg-white/[0.015] border-white/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.05)]'
            } group-hover:border-accent/25 group-hover:shadow-[0_4px_14px_rgba(150,130,115,0.08)]`}>

                {/* Inner Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3 h-full">
                    {/* Icon */}
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        className={`transition-all duration-300 flex items-center justify-center flex-shrink-0 rounded-xl w-12 h-12 ${
                            isPremium
                                ? 'bg-accent/20 text-accent border border-accent/20'
                                : 'bg-white/[0.04] text-accent-light/60 border border-white/[0.05] group-hover:bg-accent/[0.06] group-hover:text-accent/80 group-hover:border-accent/10'
                        }`}
                    >
                        <SkillIcon className="w-6 h-6" strokeWidth={1.5} />
                    </motion.div>

                    {/* Title & Badge */}
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <h3 className={`font-bold tracking-tight text-sm transition-colors ${
                                isPremium
                                    ? 'text-accent text-base'
                                    : 'text-off-white/90 text-sm'
                            }`}>
                                {skill.name}
                            </h3>
                        </div>
                        
                        {isPremium && (
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
                            : 'text-off-white/60'
                    }`}>
                        {description}
                    </p>

                    {/* Category Tag */}
                    <div className="mt-auto pt-2">
                        <span className={`inline-block text-[10px] px-2 py-1 rounded-full font-medium tracking-wide ${
                            isPremium
                                ? 'bg-accent/15 text-accent/90 border border-accent/30'
                                : 'bg-accent/8 text-accent/70 border border-accent/15'
                        }`}>
                            {category}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
