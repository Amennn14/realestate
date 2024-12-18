// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Your existing content paths
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Custom gold color
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite', // Custom shake animation
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
