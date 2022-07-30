/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloud-bg': "url('/src/assets/bg2.png')",
        'blue-bg': "url('/src/assets/blue.png')",
        'brown-bg':"url('/src/assets/brown.png')"
      },

      screens: {
        'sm': {
          'min': '360px',
        'max' : '800px'}
      },
    },
  },
  plugins: [],
}
