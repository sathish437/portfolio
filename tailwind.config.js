/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: '#00f2fe', // Electric Cyan Glow primary
                'accent-purple': '#9b5de5', // Neon Purple Accent
                'accent-blue': '#0070f3', // Electric Blue secondary
                'accent-light': '#a1a1a6', // Warm silver/gray secondary
                background: '#050505', // Cinematic black
                'smoky-black': '#0d0d0d', // Deep carbon secondary
                surface: 'rgba(17, 17, 17, 0.75)', // Glassmorphism dark surface
                'glass-edge': 'rgba(255, 255, 255, 0.05)',
                'off-white': '#ffffff', // Pure white contrast text
                'gray-text-muted': '#86868b', // Apple-style gray hierarchy
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-to-cool': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', // Electric Cyan to Deep Blue
                'gradient-to-warm': 'linear-gradient(135deg, #9b5de5 0%, #f15bb5 100%)', // Cyberpunk purple-pink
                'gradient-cool-subtle': 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(0, 112, 243, 0.04) 100%)',
                'gradient-warm-subtle': 'linear-gradient(135deg, rgba(155, 93, 229, 0.08) 0%, rgba(241, 91, 181, 0.04) 100%)',
                'gradient-cyan-purple': 'linear-gradient(135deg, #00f2fe 0%, #9b5de5 100%)',
            },
            boxShadow: {
                'glow-cyan-sm': '0 0 10px rgba(0, 242, 254, 0.2)',
                'glow-cyan': '0 0 20px rgba(0, 242, 254, 0.35)',
                'glow-cyan-lg': '0 0 35px rgba(0, 242, 254, 0.5)',
                'glow-purple-sm': '0 0 10px rgba(155, 93, 229, 0.2)',
                'glow-purple': '0 0 20px rgba(155, 93, 229, 0.35)',
                'glow-purple-lg': '0 0 35px rgba(155, 93, 229, 0.5)',
                'inner-glow': 'inset 0 0 15px rgba(255, 255, 255, 0.03)',
                'neon-border': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 15px rgba(0, 242, 254, 0.1)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(2deg)' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-25px) rotate(-3deg)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)', borderColor: 'rgba(0, 242, 254, 0.2)' },
                    '50%': { boxShadow: '0 0 30px rgba(0, 242, 254, 0.5)', borderColor: 'rgba(0, 242, 254, 0.5)' },
                },
                'grid-scroll': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '40px 40px' },
                }
            },
            animation: {
                float: 'float 4s ease-in-out infinite',
                'float-slow': 'float-slow 8s ease-in-out infinite',
                shimmer: 'shimmer 4s linear infinite',
                'bounce-slow': 'bounce-slow 2.5s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'grid-scroll': 'grid-scroll 20s linear infinite',
            },
            zIndex: {
                'blob-base': '0',
                'content': '10',
                'overlay': '20',
                'modal': '30',
                'floating': '40',
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '8px',
                lg: '12px',
                xl: '20px',
                '2xl': '32px',
                '3xl': '48px',
            },
        },
    },
    plugins: [],
}
