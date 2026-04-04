import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from '../components/desktop/Sidebar'
import Hero from '../components/desktop/Hero'
import SocialDock from '../components/desktop/SocialDock'
import ProjectCard from '../components/shared/ProjectCard'
import SkillsGrid from '../components/shared/SkillsGrid'
import { portfolioData } from '../utils/portfolioData'

export default function DesktopLayout() {
    const [activeTab, setActiveTab] = useState('home')

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-accent">About Me</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                            {portfolioData.sections.about.intro}
                        </p>
                        <div className="inline-block bg-accent/10 border border-accent/20 rounded-xl px-4 py-2 mb-6">
                            <p className="text-accent text-sm font-bold tracking-wide">{portfolioData.sections.about.techHighlight}</p>
                        </div>
                        <p className="text-gray-500 leading-relaxed text-base italic border-l-2 border-accent/40 pl-4">
                            {portfolioData.sections.about.statement}
                        </p>
                    </motion.div>
                )
            case 'skills':
                return <SkillsGrid data={portfolioData.sections.skills} />
            case 'projects':
                return (
                    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                        {portfolioData.sections.projects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                )
            case 'contact':
                return (
                    <div className="glass-card p-10 max-w-xl w-full border-accent/20">
                        <h2 className="text-3xl font-bold mb-8 text-accent">Get in Touch</h2>
                        <div className="space-y-6">
                            {portfolioData.sections.contact.methods.map((method) => (
                                <a
                                    key={method.label}
                                    href={method.link}
                                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                >
                                    <div>
                                        <span className="text-sm text-gray-500 block">{method.label}</span>
                                        <span className="text-lg font-medium">{method.value}</span>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">→</div>
                                </a>
                            ))}
                        </div>
                    </div>
                )
            default:
                return <Hero />
        }
    }

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 relative flex flex-col items-center justify-center p-10 ml-64 overflow-y-auto no-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="w-full flex flex-col items-center"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>

                <SocialDock />
            </main>
        </div>
    )
}
