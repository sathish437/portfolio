import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function FuturisticBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particles = [];
        const particleCount = Math.min(60, Math.floor((width * height) / 25000)); // Cap particles for performance
        const mouse = { x: null, y: null, radius: 140 };

        // Handle resize
        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Handle mouse move
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Initialize particles
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.baseSize = this.size;
                
                // Floating upwards speed (antigravity drift)
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = -(Math.random() * 0.5 + 0.15); // Float upwards
                
                this.color = Math.random() > 0.5 ? 'rgba(0, 242, 254, 0.2)' : 'rgba(155, 93, 229, 0.2)';
                this.glowColor = this.color.replace('0.2', '0.35');
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                
                // Add soft neon glows to larger particles
                if (this.baseSize > 1.5) {
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = this.glowColor;
                } else {
                    ctx.shadowBlur = 0;
                }
                
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Loop particles if they float off the screen
                if (this.y < -10) {
                    this.y = height + 10;
                    this.x = Math.random() * width;
                }
                if (this.x < -10) this.x = width + 10;
                if (this.x > width + 10) this.x = -10;

                // Mouse interaction - repellent effect
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        // Push away from mouse
                        const angle = Math.atan2(dy, dx);
                        const pushX = Math.cos(angle) * force * 1.8;
                        const pushY = Math.sin(angle) * force * 1.8;

                        this.x += pushX;
                        this.y += pushY;
                        
                        // Briefly scale up size under cursor light
                        this.size = this.baseSize * (1 + force * 1.2);
                    } else {
                        if (this.size > this.baseSize) {
                            this.size -= 0.05;
                        }
                    }
                } else {
                    if (this.size > this.baseSize) {
                        this.size -= 0.05;
                    }
                }
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Draw connections for nearby particles (energy constellation)
        const drawConnections = () => {
            ctx.shadowBlur = 0; // Disable connection glows for performance
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        const alpha = (100 - dist) / 100 * 0.03;
                        ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw particles & update
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            drawConnections();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="absolute inset-0 bg-[#050505] overflow-hidden select-none pointer-events-none z-0">
            {/* Perspective Animated Grid System */}
            <div 
                className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-scroll"
                style={{
                    perspective: '1000px',
                    transform: 'rotateX(50deg) scale(1.6) translateY(-10%)',
                    transformOrigin: 'top center',
                }}
            />

            {/* Glowing Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,#050505_95%)]" />

            {/* Floating Ambient Glowing Layers */}
            {/* Blob 1: Cyan Glow */}
            <motion.div
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, -60, 40, 0],
                    scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-[#00f2fe]/3 rounded-full blur-[140px]"
            />

            {/* Blob 2: Purple Glow */}
            <motion.div
                animate={{
                    x: [0, -90, 60, 0],
                    y: [0, 80, -50, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#9b5de5]/2 rounded-full blur-[160px]"
            />

            {/* Blob 3: Center-Right Blue Drift */}
            <motion.div
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, 60, -60, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-[35%] right-[15%] w-[450px] h-[450px] bg-[#0070f3]/1.5 rounded-full blur-[130px]"
            />

            {/* Interactive Particle Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        </div>
    );
}
