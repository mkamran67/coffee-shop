// const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

// import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
