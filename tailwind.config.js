/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          volt: '#D4FF00', // Electric Volt (Nike/Pro Sports look)
          'volt-hover': '#bdec00',
          emerald: '#10B981',
          crimson: '#FF2A54',
          cyan: '#00F0FF',
          gold: '#FFB800',
        },
        surface: {
          deep: '#06080C',
          dark: '#0B0F17',
          card: '#121824',
          cardHover: '#182030',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(212, 255, 0, 0.3)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
