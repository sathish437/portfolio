import { motion } from 'framer-motion'
import { User, Briefcase, Cpu, Mail, Home } from 'lucide-react'

const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Sidebar({ activeTab, setActiveTab }) {
    return (
        <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-surface/50 backdrop-blur-xl p-8 flex flex-col z-20">
            <div className="mb-12">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-bold text-xl mb-4">A</div>
                <h1 className="text-xl font-bold tracking-tight">Portfolio</h1>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.id

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive ? 'bg-accent/10 text-accent' : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Icon size={20} className={isActive ? 'text-accent' : 'group-hover:scale-110 transition-transform'} />
                            <span className="font-medium">{item.label}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"
                                />
                            )}
                        </button>
                    )
                })}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/5 text-sm text-gray-500">
                © 2024 Alex Designer
            </div>
        </aside>
    )
}
