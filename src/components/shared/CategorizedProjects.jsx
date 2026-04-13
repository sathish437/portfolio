import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';
import ProjectCard from './ProjectCard';

export default function CategorizedProjects() {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const categories = portfolioData.sections.projects;

    const toggleCategory = (catName) => {
        setActiveCategoryId(activeCategoryId === catName ? null : catName);
        setSelectedProjectId(null); // Reset project selection when changing category
    };

    const toggleProject = (projectId) => {
        setSelectedProjectId(selectedProjectId === projectId ? null : projectId);
    };

    return (
        <div className="w-full space-y-6">
            {categories.map((category, index) => (
                <div key={category.categoryName} className={`group ${index !== categories.length - 1 ? 'pb-6 border-b border-white/[0.05]' : ''}`}>
                    {/* Level 1: Category Header */}
                    <button
                        onClick={() => toggleCategory(category.categoryName)}
                        className={`w-full flex items-center justify-between p-5 rounded-3xl transition-all duration-300 border ${
                            activeCategoryId === category.categoryName
                                ? 'bg-white/[0.04] border-accent/30 shadow-[0_10px_40px_rgba(150,130,115,0.1)] backdrop-blur-xl'
                                : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                        }`}
                    >
                        <div className="flex flex-col text-left pr-4">
                            <span className={`text-[12px] font-black uppercase tracking-[0.1EM] transition-colors mb-2 leading-snug ${
                                activeCategoryId === category.categoryName ? 'text-accent' : 'text-off-white/90 group-hover:text-white'
                            }`}>
                                {category.categoryName}
                            </span>
                            <span className="text-xs text-off-white/50 font-medium leading-relaxed">
                                {category.categoryDescription}
                            </span>
                        </div>
                        <motion.div
                            animate={{ 
                                rotate: activeCategoryId === category.categoryName ? 90 : 0,
                                scale: activeCategoryId === category.categoryName ? 1.1 : 1
                            }}
                            className={`shrink-0 ${activeCategoryId === category.categoryName ? 'text-accent' : 'text-accent/40'}`}
                        >
                            <ChevronRight size={20} />
                        </motion.div>
                    </button>

                    {/* Level 2 & 3: Projects List & Details */}
                    <AnimatePresence>
                        {activeCategoryId === category.categoryName && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="pl-6 pr-2 py-4 space-y-2 border-l border-white/5 ml-4 mt-2">
                                    {category.projects.map((project) => (
                                        <div key={project.id} className="w-full">
                                            {/* Project Title Button */}
                                            <button
                                                onClick={() => toggleProject(project.id)}
                                                className={`w-full text-left px-4 py-3 rounded-2xl text-[13px] font-bold transition-all flex items-center gap-3 ${
                                                    selectedProjectId === project.id
                                                        ? 'text-accent bg-accent/10 border border-accent/20 shadow-sm'
                                                        : 'text-off-white/60 hover:text-off-white hover:bg-white/[0.04] border border-transparent'
                                                }`}
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                                                    selectedProjectId === project.id ? 'bg-accent scale-125' : 'bg-white/20'
                                                }`} />
                                                {project.name}
                                            </button>

                                            {/* Level 3: Project Details */}
                                            <AnimatePresence>
                                                {selectedProjectId === project.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-4 pb-2 mb-2 pl-4 pr-1">
                                                            {/* Premium Project Card Integration */}
                                                            <ProjectCard project={project} index={0} isMobile={true} />
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
