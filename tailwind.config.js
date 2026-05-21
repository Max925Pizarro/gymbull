/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          black: '#050505',
          red: '#ff1a1a',
          darkGray: '#121212',
          lightGray: '#1f1f1f',
          steel: '#2b2b2b',
        }
      },
      fontFamily: {
        sports: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-red': '0 0 15px rgba(255, 26, 26, 0.3)',
        'neon-red-lg': '0 0 25px rgba(255, 26, 26, 0.5)',
        'neon-red-xl': '0 0 35px rgba(255, 26, 26, 0.7)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, filter: 'drop-shadow(0 0 5px rgba(255, 26, 26, 0.4))' },
          '50%': { opacity: 1, filter: 'drop-shadow(0 0 20px rgba(255, 26, 26, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
