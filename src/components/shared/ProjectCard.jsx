import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, index, isMobile = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: index ? index * 0.05 : 0, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`group flex flex-col p-6 rounded-3xl cursor-pointer relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(150,130,115,0.25)] transition-all duration-400 ${isMobile ? 'min-h-[160px]' : 'h-full'}`}
        >
            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Header: Title & Icons */}
            <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-lg font-black tracking-tight text-off-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-off-white transition-all duration-300 leading-tight">
                    {project.name}
                </h3>
                <div className="flex gap-2.5 shrink-0 ml-3">
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="text-white/30 hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="text-white/30 hover:text-accent hover:scale-110 transition-all duration-300"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.stack?.map((tech, i) => (
                    <span 
                        key={i} 
                        className="text-[9px] px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-black uppercase tracking-wider shadow-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-sm text-off-white/70 mb-6 line-clamp-3 leading-relaxed relative z-10 font-medium">
                {project.description}
            </p>

            {/* Action Button */}
            {project.links?.live && (
                <div className="mt-auto relative z-10">
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-background bg-gradient-to-r from-accent to-accent-light px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_5px_15px_rgba(150,130,115,0.3)] hover:shadow-[0_8px_25px_rgba(150,130,115,0.4)] w-fit"
                    >
                        <ExternalLink size={14} strokeWidth={2.5} />
                        View Project
                    </a>
                </div>
            )}
        </motion.div>
    )
}
