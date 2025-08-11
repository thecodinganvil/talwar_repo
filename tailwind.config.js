/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 15s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(10px)' },
          '50%': { transform: 'translateY(10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-5px) translateX(-5px)' },
        },
      },
    },
  },
  plugins: [],
};