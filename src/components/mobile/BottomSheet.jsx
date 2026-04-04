import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function BottomSheet({ children, close }) {
    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={close}
                className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[60]"
            />

            {/* Sheet */}
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 min-h-[50vh] max-h-[90vh] bg-surface border-t border-white/5 rounded-t-[40px] z-[70] shadow-[0_-20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col no-scrollbar"
            >
                <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto mt-4 mb-2 flex-shrink-0" onClick={close} />

                <div className="absolute top-6 right-6">
                    <button
                        onClick={close}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 active:scale-90 active:bg-white/10"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    {children}
                </div>
            </motion.div>
        </>
    )
}
