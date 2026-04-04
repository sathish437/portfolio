import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check, Send } from 'lucide-react';

const iconMap = {
    email: Mail,
    linkedin: Linkedin,
    github: Github
};

export default function ContactSection({ data }) {
    const [copied, setCopied] = useState(false);
    const [formStatus, setFormStatus] = useState('idle');

    const handleCopy = (e, text) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
        
        window.location.href = `mailto:duraisamysathish4@gmail.com?subject=${subject}&body=${body}`;
        
        setFormStatus('sent');
        setTimeout(() => setFormStatus('idle'), 4000);
        e.target.reset();
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {data.methods.map((method, i) => {
                    const Icon = iconMap[method.id] || Mail;
                    return (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-surface/50 border border-white/5 rounded-3xl p-6 hover:bg-white/[0.03] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[180px]"
                        >
                            {/* Subtle Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            
                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background group-hover:shadow-[0_0_20px_rgba(150,130,115,0.3)] transition-all duration-300">
                                    <Icon size={26} strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-off-white mb-2">{method.label}</h4>
                                    <p className="text-xs text-accent-light/60 truncate w-full max-w-[200px] mx-auto px-2">{method.value}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full mt-6 relative z-10">
                                <a
                                    href={method.link}
                                    target={method.id !== 'email' ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 text-accent text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center"
                                >
                                    Connect
                                </a>
                                {method.id === 'email' && (
                                    <button
                                        onClick={(e) => handleCopy(e, method.value)}
                                        className="w-12 bg-white/[0.05] hover:bg-white/[0.1] border border-white/5 hover:border-white/10 text-accent-light flex items-center justify-center rounded-xl transition-all"
                                        title="Copy Email"
                                    >
                                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Optional Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass-card p-6 md:p-8 relative overflow-hidden bg-white/[0.01] border border-white/5 shadow-xl"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
                
                <h3 className="text-xl font-black uppercase tracking-tight text-off-white mb-2">Send a <span className="text-accent">Message</span></h3>
                <p className="text-xs text-accent-light/50 mb-8 font-medium max-w-md">I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/60 px-1">Your Name</label>
                            <input 
                                required
                                type="text"
                                name="name"
                                className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-off-white focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all placeholder:text-white/20" 
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/60 px-1">Your Email</label>
                            <input 
                                required
                                type="email"
                                name="email"
                                className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-off-white focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all placeholder:text-white/20" 
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/60 px-1">Message</label>
                        <textarea 
                            required
                            name="message"
                            rows="4" 
                            className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-off-white focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all resize-none placeholder:text-white/20" 
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        disabled={formStatus === 'sending' || formStatus === 'sent'}
                        className="w-full md:w-auto px-8 bg-accent hover:bg-accent/90 text-background font-black uppercase tracking-[0.2em] text-[11px] py-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {formStatus === 'idle' && <><Send size={16} className="group-hover:translate-x-1 transition-transform" /> Send Message</>}
                        {formStatus === 'sending' && <span className="animate-pulse text-background/80">Sending...</span>}
                        {formStatus === 'sent' && <><Check size={16} /> Message Sent!</>}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
