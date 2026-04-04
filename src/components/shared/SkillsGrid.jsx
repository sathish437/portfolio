import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

const categoryIcons = {
    "Programming Languages": Code2,
    "Frontend": Layout,
    "Backend": Server,
    "Database": Database,
    "Tools": Wrench
};

export default function SkillsGrid({ data }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {data.categories.map((category, i) => {
                const Icon = categoryIcons[category.name] || Code2;
                return (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                        className="glass-card p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 rounded-3xl group relative overflow-hidden"
                    >
                        {/* Subtle background glow effect on hover */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-full pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background group-hover:shadow-[0_0_20px_rgba(150,130,115,0.4)] transition-all duration-300">
                                    <Icon size={18} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xs font-black text-off-white uppercase tracking-[0.3em]">
                                    {category.name}
                               </h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2.5">
                                {category.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05 }}
                                        className={`
                                            flex flex-col px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-default
                                            ${skill.highlight 
                                                ? 'bg-accent/10 border-accent/40 text-accent-light shadow-[0_0_15px_rgba(150,130,115,0.15)]' 
                                                : 'bg-white/[0.02] border-white/5 text-accent-light/60 hover:bg-white/[0.06] hover:border-white/10'
                                            }
                                        `}
                                    >
                                        <span className={`text-[11px] font-black tracking-widest uppercase ${skill.highlight ? 'text-accent' : ''}`}>
                                            {skill.name}
                                        </span>
                                        {skill.desc && (
                                            <span className={`text-[9.5px] font-semibold mt-1 tracking-wider ${skill.highlight ? 'text-accent-light/80' : 'text-accent-light/40'}`}>
                                                {skill.desc}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
