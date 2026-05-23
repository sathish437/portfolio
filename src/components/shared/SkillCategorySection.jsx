import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import {
    Code2, Layout, Server, Wrench, Database, ChevronDown,
} from 'lucide-react';
import SkillCard from './SkillCard';

const categoryIcons = {
    "Programming Languages": Code2,
    "Frontend": Layout,
    "Backend": Server,
    "Database": Database,
    "Tools & Databases": Wrench,
    "Tools & DevOps": Wrench,
};

export default function SkillCategorySection({ category, index, columns = 3 }) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const CategoryIcon = categoryIcons[category.name] || Code2;
    const gridCols = columns === 2 ? 'grid-cols-2' : 'grid-cols-3';

    const toggle = () => {
        setOpen((s) => !s);
        if (!open && containerRef.current) {
            setTimeout(() => containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
        }
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full"
        >
            {/* Subtle Outer Glow on Hover — toned down */}
            <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-accent/15 via-transparent to-accent/15 blur-md" />

            {/* Main Category Container */}
            <div className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                open
                    ? 'bg-white/[0.025] border-accent/25 shadow-[0_4px_20px_rgba(150,130,115,0.10)]'
                    : 'bg-white/[0.01] border-white/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.06)]'
            } group-hover:border-accent/20`}>

                {/* Category Header */}
                <div
                    role="button"
                    tabIndex={0}
                    onClick={toggle}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
                    className="relative flex items-center gap-3 px-6 py-5 hover:cursor-pointer select-none transition-colors duration-200 hover:bg-white/[0.015]"
                >
                    {/* Category Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        open ? 'bg-accent/20 border border-accent/30' : 'bg-white/[0.04] border border-white/[0.08]'
                    }`}>
                        <CategoryIcon className={`w-5 h-5 transition-colors duration-300 ${open ? 'text-accent' : 'text-accent/50'}`} strokeWidth={1.5} />
                    </div>

                    {/* Category Name */}
                    <h3 className={`flex-1 text-base font-bold tracking-wide transition-colors duration-300 ${
                        open ? 'text-off-white' : 'text-off-white/70 group-hover:text-off-white/90'
                    }`}>
                        {category.name}
                    </h3>

                    {/* Chevron */}
                    <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 ${
                            open ? 'text-accent' : 'text-off-white/30'
                        }`}
                    >
                        <ChevronDown className="w-4 h-4" strokeWidth={2} />
                    </motion.div>
                </div>

                {/* Divider line when open */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-px bg-accent/10 mx-6"
                        />
                    )}
                </AnimatePresence>

                {/* Skills Grid - Collapsible */}
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="skills-panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className={`grid ${gridCols} gap-3 p-6 pt-4 [&>*]:min-w-0`}>
                                {category.items.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: skillIndex * 0.05,
                                            duration: 0.3,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                    >
                                        <SkillCard
                                            skill={skill}
                                            category={category.name}
                                            index={skillIndex}
                                            isCompact={true}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

