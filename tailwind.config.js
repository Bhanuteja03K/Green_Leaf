/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090A',
          900: '#0C0F12',
          850: '#11161A',
          800: '#171E23',
          700: '#212A31',
          600: '#2C3740',
        },
        leaf: {
          400: '#A3E635',
          500: '#84CC16',
          600: '#65A30D',
          700: '#4D7C0F',
          glow: '#A3E63533',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(6deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
