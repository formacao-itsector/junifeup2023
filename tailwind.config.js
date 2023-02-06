/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Figtree: 'Figtree, sans-serif',
      },
      keyframes: {
        pulsation: {
          '0%,100%': {
            color: '#ddd6fe',
          },
          '50%': {
            color: '#4c1d95',
          },
        },
      },
      animation: {
        pulsation: 'pulsation 2s linear infinite',
      },
    },
  },
  plugins: [],
};
