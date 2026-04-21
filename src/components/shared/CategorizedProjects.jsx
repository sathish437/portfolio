import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';
import ProjectCard from './ProjectCard';
import { BackgroundBlobs } from './BackgroundBlobs';
import category1Img from '../../img/category1.png';
import category2Img from '../../img/category2.jpg';
import category3Img from '../../img/category3.jpg';

export default function CategorizedProjects({ defaultOpen = false }) {
    const [activeCategoryId, setActiveCategoryId] = useState(defaultOpen ? portfolioData.sections.projects[0]?.categoryName : null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const categories = portfolioData.sections.projects;

    // Map category names to imported images
    const categoryImages = {
        'Core Web Projects (HTML, CSS, JavaScript)': category1Img,
        'Modern UI & API Projects (Tailwind, JavaScript, REST API)': category2Img,
        'Advanced Frontend Apps (React & Tailwind)': category3Img,
    };

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
                            {/* Category Header with Image Inside */}
                            <motion.button
                                onClick={() => toggleCategory(category.categoryName)}
                                whileHover={{ scale: 1.01 }}
                                className={`w-full flex flex-col p-4 sm:p-5 rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                                    isActive
                                        ? 'bg-accent/10 border-accent/40 shadow-lg shadow-accent/5'
                                        : 'bg-white/[0.02] border-accent/10 hover:bg-white/[0.04] hover:border-accent/25'
                                }`}
                            >
                                {/* Top Image */}
                                {categoryImages[category.categoryName] && (
                                    <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden border-2 border-accent/30 mb-4 group/img">
                                        <img
                                            src={categoryImages[category.categoryName]}
                                            alt={category.categoryName}
                                            className="w-full h-full object-contain bg-dark/50 transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                                        />
                                        {/* Gradient overlay for text visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent opacity-60" />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                                    </div>
                                )}

                                {/* Content Section */}
                                <div className="relative z-10 flex items-center justify-between text-left">
                                    <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {isActive && (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                                    className="text-accent shrink-0"
                                                >
                                                    <Sparkles size={14} />
                                                </motion.div>
                                            )}
                                            <span className={`text-sm font-black uppercase tracking-wider transition-colors truncate ${
                                                isActive ? 'text-accent' : 'text-off-white/90 group-hover:text-accent'
                                            }`}>
                                                {category.categoryName}
                                            </span>
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
                                </div>
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

