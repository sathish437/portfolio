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
        },
    },
    plugins: [],
}
