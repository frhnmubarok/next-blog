const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  variants: {},
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: false,
};
