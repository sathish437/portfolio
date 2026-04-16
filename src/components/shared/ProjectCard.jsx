import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { GradientCard } from './GradientCard'
import { AnimatedBadge } from './AnimatedBadge'

export default function ProjectCard({ project, index, isMobile = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: index ? index * 0.05 : 0, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
        >

            <GradientCard
                variant="cool"
                glow={false}
                className={`flex flex-col relative overflow-visible bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 hover:border-accent/60 transition-all duration-300 ease-in-out hover:shadow-inner-glow ${isMobile ? 'min-h-[160px]' : 'h-full'}`}
                hoverEffect={{ scale: 1.02, y: -6 }}
            >
                {/* Gradient overlay background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent blur-2xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-transparent blur-2xl rounded-full" />
                </div>

                <div className="relative z-content flex flex-col h-full">
                    {/* Header: Title & Icons */}
                    <div className="flex justify-between items-start mb-4 gap-3">
                        <motion.h3
                            whileHover={{ x: 4 }}
                            className="text-lg font-black tracking-tight text-accent transition-all duration-300 leading-tight flex-1"
                        >
                            {project.name}
                        </motion.h3>
                        <div className="flex gap-2.5 shrink-0">
                            {project.links?.github && (
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 hover:text-accent transition-all duration-300"
                                    title="GitHub"
                                >
                                    <Github size={16} strokeWidth={1.5} />
                                </motion.a>
                            )}
                            {project.links?.live && (
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 hover:text-accent transition-all duration-300"
                                    title="Live Project"
                                >
                                    <ExternalLink size={16} strokeWidth={1.5} />
                                </motion.a>
                            )}
                        </div>
                    </div>

                    {/* Stack Badges - using AnimatedBadge */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack?.map((tech, i) => (
                            <AnimatedBadge
                                key={i}
                                label={tech}
                                variant="accent"
                                size="sm"
                                interactive={false}
                            />
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-off-white/70 mb-6 line-clamp-3 leading-relaxed font-medium flex-1">
                        {project.description}
                    </p>

                    {/* Action Button */}
                    {project.links?.live && (
                        <div className="mt-auto">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-background px-6 py-2.5 rounded-xl transition-all duration-300 w-fit bg-accent hover:bg-accent/90"
                            >
                                <ExternalLink size={14} strokeWidth={2.5} />
                                View Project
                            </motion.a>
                        </div>
                    )}
                </div>
            </GradientCard>
        </motion.div>
    )
}

