import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check, Send, AlertTriangle } from 'lucide-react';

const iconMap = {
    email: Mail,
    linkedin: Linkedin,
    github: Github
};

export default function ContactSection({ data }) {
    const [copied, setCopied] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'
    
    // Live validation states
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [touched, setTouched] = useState({ name: false, email: false, message: false });
    
    const errors = {
        name: formData.name.trim().length === 0 ? "Name is required" : null,
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "Enter a valid email node" : null,
        message: formData.message.trim().length < 10 ? "Message must exceed 10 characters" : null
    };

    const handleCopy = (e, text) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Mark all as touched
        setTouched({ name: true, email: true, message: true });
        
        // If there are errors, stop
        if (errors.name || errors.email || errors.message) return;

        setFormStatus('sending');
        
        const subject = encodeURIComponent(`Futuristic Portfolio Message from ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
        
        setTimeout(() => {
            window.location.href = `mailto:duraisamysathish4@gmail.com?subject=${subject}&body=${body}`;
            setFormStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
            setTimeout(() => setFormStatus('idle'), 4000);
        }, 1000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 text-left">
            {/* Header Title */}
            <div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center text-accent">
                    <Mail size={22} className="animate-pulse" />
                </div>
                <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-off-white font-outfit">
                        Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Telemetry</span>
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-text-muted">Direct communication stream</p>
                </div>
            </div>

            {/* Quick connection grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.methods.map((method, i) => {
                    const Icon = iconMap[method.id] || Mail;
                    return (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-white/[0.035] border border-white/[0.05] rounded-2xl p-4 flex flex-col justify-between min-h-[140px] hover:border-accent/20 hover:bg-white/[0.05] hover:scale-[1.015] hover:shadow-md transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 blur-xl rounded-full pointer-events-none" />
                            
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-accent group-hover:scale-105 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                                    <Icon size={18} strokeWidth={2} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-text-muted">{method.label}</h4>
                                    <p className="text-xs text-off-white/80 font-mono truncate">{method.value}</p>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-4 relative z-10">
                                <a
                                    href={method.link}
                                    target={method.id !== 'email' ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="flex-1 py-1.5 bg-accent/15 border border-accent/20 hover:border-accent/40 text-accent text-[9px] font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center"
                                >
                                    Connect
                                </a>
                                {method.id === 'email' && (
                                    <button
                                        onClick={(e) => handleCopy(e, method.value)}
                                        className="w-10 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] text-accent flex items-center justify-center rounded-lg transition-all"
                                        title="Copy Email"
                                    >
                                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Premium Message Form Panel */}
            <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/[0.05] backdrop-blur-md shadow-inner-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-3xl rounded-full pointer-events-none" />
                
                <h3 className="text-sm font-black uppercase tracking-widest text-off-white mb-6">
                    Dispatch <span className="text-accent">Packet</span>
                </h3>

                <AnimatePresence mode="wait">
                    {formStatus === 'sent' ? (
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="flex flex-col items-center justify-center py-10 text-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center text-accent shadow-md">
                                <Check size={28} className="animate-bounce" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-off-white">Transmission Broadcasted</h4>
                                <p className="text-xs text-gray-text-muted mt-1 leading-relaxed">Mail client pipeline initialized. Stand by for response nodes.</p>
                            </div>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Name Input */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-text-muted px-1">Name</label>
                                    <div className="relative">
                                        <input 
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onBlur={() => handleBlur('name')}
                                            className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3 text-xs text-off-white focus:outline-none focus:bg-white/[0.04] transition-all placeholder:text-white/10 ${
                                                touched.name && errors.name 
                                                    ? 'border-red-500/40 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.08)]' 
                                                    : 'border-white/5 focus:border-accent/40 focus:ring-1 focus:ring-accent/25'
                                            }`} 
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {touched.name && errors.name && (
                                            <motion.span
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="text-[9.5px] text-red-400 font-mono flex items-center gap-1 mt-0.5 px-1"
                                            >
                                                <AlertTriangle size={9} />
                                                <span>{errors.name}</span>
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-text-muted px-1">Email Node</label>
                                    <div className="relative">
                                        <input 
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={() => handleBlur('email')}
                                            className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3 text-xs text-off-white focus:outline-none focus:bg-white/[0.04] transition-all placeholder:text-white/10 ${
                                                touched.email && errors.email 
                                                    ? 'border-red-500/40 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.08)]' 
                                                    : 'border-white/5 focus:border-accent/40 focus:ring-1 focus:ring-accent/25'
                                            }`} 
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {touched.email && errors.email && (
                                            <motion.span
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="text-[9.5px] text-red-400 font-mono flex items-center gap-1 mt-0.5 px-1"
                                            >
                                                <AlertTriangle size={9} />
                                                <span>{errors.email}</span>
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-text-muted px-1">Message Spec</label>
                                <textarea 
                                    name="message"
                                    rows="4" 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onBlur={() => handleBlur('message')}
                                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3 text-xs text-off-white focus:outline-none focus:bg-white/[0.04] transition-all resize-none placeholder:text-white/10 ${
                                        touched.message && errors.message 
                                            ? 'border-red-500/40 focus:border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.08)]' 
                                            : 'border-white/5 focus:border-accent/40 focus:ring-1 focus:ring-accent/25'
                                    }`} 
                                    placeholder="Enter your system transmission specifications..."
                                ></textarea>
                                <AnimatePresence>
                                    {touched.message && errors.message && (
                                        <motion.span
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="text-[9.5px] text-red-400 font-mono flex items-center gap-1 mt-0.5 px-1"
                                        >
                                            <AlertTriangle size={9} />
                                            <span>{errors.message}</span>
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                disabled={formStatus === 'sending' || !!(touched.name && errors.name) || !!(touched.email && errors.email) || !!(touched.message && errors.message)}
                                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-accent to-accent-blue text-background font-black text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-md group"
                            >
                                {formStatus === 'sending' ? (
                                    <span className="animate-pulse">Transmitting...</span>
                                ) : (
                                    <>
                                        <Send size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                        <span>Dispatch Telemetry</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
