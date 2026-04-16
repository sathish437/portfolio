/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: '#968273', // Smoky copper
                'accent-blue': '#3a3b39', // Storm grey
                'accent-light': '#b5b0a8', // Warm silver secondary
                background: '#0f0e0d', // Master Espresso black
                'smoky-black': '#1c1d1b', // Graphite Olive
                surface: 'rgba(28, 29, 27, 0.85)', // Graphite Olive surface
                'glass-edge': 'rgba(150, 130, 115, 0.1)',
                'mist-blue': '#3a3b39', // Storm grey as placeholder
                'off-white': '#d4d0c9', // Premium warm silver
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-to-cool': 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #3b82f6 100%)', // Cool tones (Skills)
                'gradient-to-warm': 'linear-gradient(135deg, #d946ef 0%, #ec4899 50%, #f97316 100%)', // Warm tones (Projects)
                'gradient-cool-subtle': 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)',
                'gradient-warm-subtle': 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(249, 115, 22, 0.08) 100%)',
            },
            boxShadow: {
                'glow-sm': '0 0 12px rgba(14, 165, 233, 0.3)',
                'glow-md': '0 0 24px rgba(14, 165, 233, 0.4)',
                'glow-lg': '0 0 32px rgba(14, 165, 233, 0.5)',
                'glow-warm-sm': '0 0 12px rgba(217, 70, 239, 0.3)',
                'glow-warm-md': '0 0 24px rgba(217, 70, 239, 0.4)',
                'glow-warm-lg': '0 0 32px rgba(217, 70, 239, 0.5)',
                'inner-glow': 'inset 0 0 20px rgba(150, 130, 115, 0.1)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 12px rgba(14, 165, 233, 0.3)' },
                    '50%': { boxShadow: '0 0 24px rgba(14, 165, 233, 0.6)' },
                },
            },
            animation: {
                float: 'float 3.5s ease-in-out infinite',
                shimmer: 'shimmer 3s linear infinite',
                'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.6s ease-out',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
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
                xl: '16px',
            },
        },
    },
    plugins: [],
}
