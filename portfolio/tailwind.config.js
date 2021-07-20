const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        sunset: {
          light: '#e4126b',
          DEFAULT: '#c7175f',
          dark: '#7d0266',
        },
        sunrise: {
          DEFAULT: '#c7175f',
          dark: '#fe860f',
        },
        bg: {
          darkest: '#1b1819',
          dark: '#292526',
          DEFAULT: '#373133',
          light: '#50484a',
          lightest: '#73676b',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
