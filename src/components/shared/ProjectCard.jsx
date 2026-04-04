import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, index, isMobile = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.07, duration: 0.45 }}
            whileHover={{ y: -4, scale: 1.02, boxShadow: '0 8px 32px rgba(150,130,115,0.18)' }}
            className={`glass-card p-5 flex flex-col group cursor-pointer ${isMobile ? 'min-h-[160px]' : 'h-full'}`}
        >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-black group-hover:text-accent transition-colors text-off-white/90 leading-tight">
                    {project.name}
                </h3>
                <div className="flex gap-2 shrink-0 ml-2">
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="text-accent-light/30 hover:text-off-white transition-colors"
                        >
                            <Github size={15} />
                        </a>
                    )}
                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="text-accent-light/30 hover:text-off-white transition-colors"
                        >
                            <ExternalLink size={15} />
                        </a>
                    )}
                </div>
            </div>



            {project.links?.live && (
                <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-accent/80 hover:text-accent border border-accent/20 hover:border-accent/50 px-3 py-1.5 rounded-lg transition-all duration-200 w-fit"
                >
                    <ExternalLink size={11} />
                    View Project
                </a>
            )}
        </motion.div>
    )
}
