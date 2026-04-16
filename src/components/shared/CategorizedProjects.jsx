import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';
import ProjectCard from './ProjectCard';
import { BackgroundBlobs } from './BackgroundBlobs';

export default function CategorizedProjects({ defaultOpen = false }) {
    const [activeCategoryId, setActiveCategoryId] = useState(defaultOpen ? portfolioData.sections.projects[0]?.categoryName : null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const categories = portfolioData.sections.projects;

    const toggleCategory = (catName) => {
        setActiveCategoryId(activeCategoryId === catName ? null : catName);
        setSelectedProjectId(null);
    };

    const toggleProject = (projectId) => {
        setSelectedProjectId(selectedProjectId === projectId ? null : projectId);
    };

    return (
        <div className="relative w-full space-y-6">
            <div className="relative z-content space-y-6">
                {categories.map((category, index) => {
                    const isActive = activeCategoryId === category.categoryName;
                    const projectCount = category.projects.length;

                    return (
                        <motion.div
                            key={category.categoryName}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`group relative rounded-2xl overflow-hidden ${
                                index !== categories.length - 1 ? 'pb-6 border-b border-accent/10' : ''
                            }`}
                        >
                            {/* Category Header */}
                            <motion.button
                                onClick={() => toggleCategory(category.categoryName)}
                                whileHover={{ x: 4 }}
                                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                                    isActive
                                        ? 'bg-accent/10 border-accent/40'
                                        : 'bg-white/[0.02] border-accent/10 hover:bg-white/[0.04] hover:border-accent/25'
                                }`}
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent/10 to-transparent blur-3xl rounded-full" />
                                </div>

                                <div className="relative z-10 flex flex-col text-left flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        {isActive && (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                                className="text-accent"
                                            >
                                                <Sparkles size={16} />
                                            </motion.div>
                                        )}
                                        <span className={`text-sm font-black uppercase tracking-wider transition-colors ${
                                            isActive ? 'text-accent' : 'text-off-white/90 group-hover:text-accent'
                                        }`}>
                                            {category.categoryName}
                                        </span>
                                        <motion.div
                                            animate={{ scale: isActive ? 1.1 : 1 }}
                                            className={`ml-auto text-xs px-2.5 py-1 rounded-full font-bold ${
                                                isActive
                                                    ? 'bg-accent/25 text-accent'
                                                    : 'bg-white/[0.05] text-off-white/60'
                                            }`}
                                        >
                                            {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
                                        </motion.div>
                                    </div>
                                    <p className="text-xs text-off-white/60 font-medium leading-relaxed mt-1">
                                        {category.categoryDescription}
                                    </p>
                                </div>

                                {/* Chevron Icon */}
                                <motion.div
                                    animate={{
                                        rotate: isActive ? 90 : 0,
                                        scale: isActive ? 1.2 : 1,
                                    }}
                                    className={`shrink-0 ml-4 transition-colors ${
                                        isActive ? 'text-accent' : 'text-accent/40 group-hover:text-accent/60'
                                    }`}
                                >
                                    <ChevronRight size={22} />
                                </motion.div>
                            </motion.button>

                            {/* Projects List Container */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 pb-2 px-2 space-y-3">
                                            {/* Project list - same for mobile and desktop */}
                                            {category.projects.map((project, idx) => (
                                                <motion.div
                                                    key={project.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                                                >
                                                    {/* Project Title Button */}
                                                    <button
                                                        onClick={() => toggleProject(project.id)}
                                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-3 border ${
                                                            selectedProjectId === project.id
                                                                ? 'text-accent bg-accent/15 border-accent/40'
                                                                : 'text-off-white/70 hover:text-accent hover:bg-white/[0.05] border-accent/10'
                                                        }`}
                                                    >
                                                        <motion.div
                                                            animate={{
                                                                scale: selectedProjectId === project.id ? 1.3 : 1,
                                                                backgroundColor: selectedProjectId === project.id ? 'rgba(150, 130, 115, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                                                            }}
                                                            className="w-2 h-2 rounded-full flex-shrink-0"
                                                        />
                                                        <span className="flex-1 truncate">{project.name}</span>
                                                       
                                                    </button>

                                                    {/* Project Details Card */}
                                                    <AnimatePresence>
                                                        {selectedProjectId === project.id && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pt-3 mb-3 pl-2 pr-1">
                                                                    <ProjectCard project={project} index={0} isMobile={true} />
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

