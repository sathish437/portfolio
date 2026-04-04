import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '../../utils/portfolioData'

export default function SocialDock() {
    const socials = [
        { icon: Github, href: portfolioData.profile.social.github },
        { icon: Linkedin, href: portfolioData.profile.social.linkedin },
        { icon: Mail, href: portfolioData.profile.social.email },
    ]

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-surface/80 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-2xl z-20">
            {socials.map((social, i) => {
                const Icon = social.icon
                return (
                    <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:bg-accent/10 hover:text-accent transition-all duration-300 group"
                    >
                        <Icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                )
            })}
        </div>
    )
}
