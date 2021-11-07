module.exports = {
  // Include path for any file that references any styles by name
  purge: [
    './public/*.html',
    './public/*.js',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(236, 72, 153)',
        secondary: {
          100: 'rgb(252, 231, 243)',
          300: 'rgb(249, 168, 212)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
