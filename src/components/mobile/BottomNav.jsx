import { motion } from 'framer-motion'
import { User, Cpu, Briefcase, Mail } from 'lucide-react'

const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
]

export default function BottomNav({ activeSheet, setActiveSheet }) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 p-6 z-50 pointer-events-none">
            <div className="max-w-md mx-auto flex items-center justify-around p-2 bg-surface/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeSheet === item.id

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveSheet(isActive ? null : item.id)}
                            className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all relative ${isActive ? 'text-accent' : 'text-gray-500 active:scale-90 active:bg-white/5'
                                }`}
                        >
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>

                            {isActive && (
                                <motion.div
                                    layoutId="mobile-active"
                                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                                />
                            )}
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
