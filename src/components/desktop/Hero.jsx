import { motion } from 'framer-motion'
import { portfolioData } from '../../utils/portfolioData'

export default function Hero() {
    return (
        <div className="text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative inline-block mb-8"
            >
                <div className="absolute inset-0 bg-accent blur-[100px] opacity-20"></div>
                <img
                    src={portfolioData.profile.avatar}
                    alt={portfolioData.profile.name}
                    className="w-48 h-48 rounded-full border-4 border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background z-20"></div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-bold mb-4 tracking-tight"
            >
                {portfolioData.profile.name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl text-accent font-medium mb-6"
            >
                {portfolioData.profile.role}
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 max-w-lg mx-auto mb-10 text-lg leading-relaxed"
            >
                {portfolioData.profile.intro}
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-white/5 active:scale-95"
            >
                View Projects
            </motion.button>
        </div>
    )
}
