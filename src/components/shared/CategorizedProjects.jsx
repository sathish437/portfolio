import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal, ExternalLink, CheckCircle2, ArrowLeft
} from 'lucide-react';
import { portfolioData } from '../../utils/portfolioData';
import ProjectCard from './ProjectCard';

// Import local image assets for categories
import category1 from '../../img/category1.png';
import category2 from '../../img/category2.png';
import category3 from '../../img/category3.png';
import category5 from '../../img/category5.png';
import category4 from '../../img/category4.png';

const categoryImageMap = {
    'Core Web Projects': category1,
    'Modern UI & API Projects': category2,
    'Advanced Frontend Apps': category3,
    'Spring Boot Applications': category4,
    'Full Stack Apps': category5,
};

// Accent styles for categories
const catAccents = [
    { dot: 'bg-cyan-400',    text: 'text-cyan-400',    border: 'border-cyan-400/15',  glow: 'hover:shadow-md hover:border-cyan-400/30 bg-white/[0.02]'   },
    { dot: 'bg-violet-400',  text: 'text-violet-400',  border: 'border-violet-400/15', glow: 'hover:shadow-md hover:border-violet-400/30 bg-white/[0.02]' },
    { dot: 'bg-sky-400',     text: 'text-sky-400',     border: 'border-sky-400/15',    glow: 'hover:shadow-md hover:border-sky-400/30 bg-white/[0.02]'    },
    { dot: 'bg-indigo-400',  text: 'text-indigo-400',  border: 'border-indigo-400/15', glow: 'hover:shadow-md hover:border-indigo-400/30 bg-white/[0.02]' },
];

export default function CategorizedProjects() {
    const categories = portfolioData.sections.projects;
    const totalProjects = categories.reduce((a, c) => a + c.projects.length, 0);

    // Extract flagship projects
    const allProjects = categories.flatMap(c => c.projects);
    const progressOverviewProject = allProjects.find(p => p.name === 'Progress Overview');
    const healthSyncProject = allProjects.find(p => p.name === 'HealthSync');

    // Filter categories to hide Spring Boot Applications and Full Stack Apps from main UI list
    const categoriesToDisplay = categories.filter(
        cat => cat.categoryName !== 'Spring Boot Applications' && cat.categoryName !== 'Full Stack Apps'
    );

    // Browsing flow state: 'categories' | 'projects' | 'details'
    const [view, setView] = useState('categories');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="w-full flex flex-col gap-5 text-left">
            {/* ── Section header ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 border-b border-white/[0.06] pb-4"
            >
                <div className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center text-accent shrink-0">
                    <Terminal size={20} className="animate-pulse" />
                </div>
                <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-white font-outfit">
                        Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Registry</span>
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-0.5">
                        {totalProjects} live projects · {categories.length} stacks
                    </p>
                </div>
            </motion.div>

            {/* ── View switcher with smooth animation transitions ── */}
            <div className="flex flex-col gap-5 pr-0.5 pb-4">
                <AnimatePresence mode="wait">
                    {view === 'categories' && (
                        <motion.div
                            key="categories"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-6 pb-4"
                        >
                            {/* Flagship Projects Section */}
                            <div className="flex flex-col gap-5">
                                {progressOverviewProject && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05, duration: 0.5 }}
                                        className="flex flex-col gap-2"
                                    >
                                        <h3 className="text-xs font-black uppercase tracking-wider text-accent font-outfit">
                                            Progress Overview
                                        </h3>
                                        <ProjectCard project={progressOverviewProject} index={0} />
                                    </motion.div>
                                )}

                                {healthSyncProject && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                        className="flex flex-col gap-2"
                                    >
                                        <h3 className="text-xs font-black uppercase tracking-wider text-accent font-outfit">
                                            HealthSync
                                        </h3>
                                        <ProjectCard project={healthSyncProject} index={1} />
                                    </motion.div>
                                )}
                            </div>

                            {/* Separator and Remaining Categories section */}
                            <div className="border-t border-white/[0.06] pt-5 mt-2 flex flex-col gap-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                                    More Project Categories
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {categoriesToDisplay.map((cat, catIdx) => {
                                        const accent = catAccents[categories.indexOf(cat) % catAccents.length];
                                        const catImg = categoryImageMap[cat.categoryName] || category5;

                                        return (
                                            <motion.div
                                                key={cat.categoryName}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: catIdx * 0.05, duration: 0.4 }}
                                                whileHover={{ y: -1, scale: 1.01 }}
                                                onClick={() => {
                                                    setSelectedCategory(cat);
                                                    setView('projects');
                                                }}
                                                className={`relative rounded-2xl border backdrop-blur-md overflow-hidden p-0 cursor-pointer select-none transition-all duration-300
                                                    bg-white/[0.035] ${accent.border} ${accent.glow} group flex flex-col h-full`}
                                            >
                                                {/* Category Image Header */}
                                                <div className="w-full h-32 overflow-hidden relative">
                                                    <img
                                                        src={catImg}
                                                        alt={cat.categoryName}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                                                    <span className={`absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border text-[8px] font-black uppercase tracking-widest bg-black/60 backdrop-blur-sm border-white/10 ${accent.text}`}>
                                                        {cat.categoryShort || 'Web App'}
                                                    </span>
                                                </div>

                                                {/* Category Body */}
                                                <div className="p-4 flex flex-col gap-1.5 flex-1 justify-between bg-black/10">
                                                    <div>
                                                        <h3 className="text-xs font-black uppercase tracking-wider text-white/90">
                                                            {cat.categoryName}
                                                        </h3>
                                                        <p className="text-[10px] leading-relaxed text-white/45 font-medium mt-1">
                                                            {cat.categoryDescription || 'Explore our full stack solutions and applications.'}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/[0.03]">
                                                        <span className="text-[8px] font-mono text-white/20">
                                                            {cat.projects.length} modules
                                                        </span>
                                                        <span className={`text-[9px] font-black uppercase tracking-widest ${accent.text} group-hover:translate-x-0.5 transition-transform`}>
                                                            Explore →
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {view === 'projects' && selectedCategory && (
                        <motion.div
                            key="projects"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-4 pb-4"
                        >
                            {/* Header controls */}
                            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-2">
                                <button
                                    onClick={() => {
                                        setView('categories');
                                        setSelectedCategory(null);
                                    }}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] bg-white/[0.05] border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.08] transition-all"
                                >
                                    <ArrowLeft size={11} />
                                    Back to Categories
                                </button>
                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                                    {selectedCategory.categoryShort} / Registry
                                </span>
                            </div>

                            {/* Category Info Banner */}
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.04] backdrop-blur-md mb-2">
                                <h3 className="text-sm font-black uppercase text-white tracking-wide">
                                    {selectedCategory.categoryName}
                                </h3>
                                <p className="text-[10px] text-white/40 leading-relaxed mt-1 font-medium">
                                    {selectedCategory.categoryDescription}
                                </p>
                            </div>

                            {/* Vertical list of projects */}
                            <div className="flex flex-col gap-2.5">
                                {selectedCategory.projects.map((proj, pIdx) => {
                                    const accent = catAccents[categories.indexOf(selectedCategory) % catAccents.length];

                                    return (
                                        <motion.div
                                            key={proj.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: pIdx * 0.04 }}
                                            whileHover={{ scale: 1.005, x: 2 }}
                                            onClick={() => {
                                                setSelectedProject(proj);
                                                setView('details');
                                            }}
                                            className={`p-4 rounded-xl border backdrop-blur-md cursor-pointer select-none transition-all duration-300
                                                bg-white/[0.03] border-white/[0.04] hover:border-white/12 hover:bg-white/[0.05] flex items-center justify-between group`}
                                        >
                                            <div className="flex flex-col gap-1 min-w-0 flex-1">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="text-xs font-bold text-white group-hover:text-accent transition-colors truncate">
                                                        {proj.name}
                                                    </span>
                                                    {proj.type && (
                                                        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-white/[0.05] border border-white/[0.06] ${accent.text}`}>
                                                            {proj.type}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[10px] text-white/40 truncate pr-6 font-medium">
                                                    {proj.description}
                                                </p>
                                            </div>
                                            <span className="text-[11px] text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all shrink-0 pl-2">
                                                Details →
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {view === 'details' && selectedProject && (
                        <motion.div
                            key="details"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-4 pb-4"
                        >
                            {/* Header controls */}
                            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-2">
                                <button
                                    onClick={() => {
                                        setView('projects');
                                        setSelectedProject(null);
                                    }}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] bg-white/[0.05] border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.08] transition-all"
                                >
                                    <ArrowLeft size={11} />
                                    Back to List
                                </button>
                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                                    Deployment Specifications
                                </span>
                            </div>

                            {/* Project Title Block */}
                            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.035] border border-white/[0.05] backdrop-blur-md shadow-inner-glow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-2xl rounded-full pointer-events-none" />
                                
                                <div className="flex items-center gap-3">
                                    <h3 className="text-base font-black uppercase tracking-tight text-white font-outfit">
                                        {selectedProject.name}
                                    </h3>
                                    {selectedProject.type && (
                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-accent/20 text-[8.5px] font-black uppercase tracking-widest bg-accent/5 text-accent animate-pulse">
                                            {selectedProject.type}
                                        </span>
                                    )}
                                </div>
                                
                                <p className="text-[11px] leading-relaxed text-white/50 font-medium">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Technical Specifications */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Features checklist */}
                                {selectedProject.features && selectedProject.features.length > 0 && (
                                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col gap-2.5">
                                        <h4 className="text-[8.5px] font-black uppercase tracking-[0.25em] text-accent">Key Features</h4>
                                        <ul className="flex flex-col gap-2">
                                            {selectedProject.features.map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-2.5">
                                                    <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-accent/60" strokeWidth={2.5} />
                                                    <span className="text-[10px] text-white/60 leading-normal font-medium">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack preset tags */}
                                {selectedProject.stack && selectedProject.stack.length > 0 && (
                                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col gap-2.5 justify-between">
                                        <div className="flex flex-col gap-2.5">
                                            <h4 className="text-[8.5px] font-black uppercase tracking-[0.25em] text-accent">Environment Stack</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {selectedProject.stack.map((tech, ti) => (
                                                    <span key={ti} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.05] text-white/40">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action links */}
                                        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.04] mt-2">
                                            {selectedProject.links?.live && (
                                                <a
                                                    href={selectedProject.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:shadow-md hover:brightness-105 border border-cyan-400/20 hover:border-cyan-400/50"
                                                >
                                                    <ExternalLink size={10} strokeWidth={2.5} />
                                                    Launch Node
                                                </a>
                                            )}
                                            {selectedProject.links?.github && (
                                                <a
                                                    href={selectedProject.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] bg-white/[0.05] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                                                >
                                                    Inspect Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
