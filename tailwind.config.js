/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/components/assets/hero.jpg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
