/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-orange': '#FF5316',
        'theme-orange-active': '#ff7c4d',
        'body': 'rgb(242 242 242)',
        'good-answer': 'rgba(0, 255, 2, 0.6)',
        'wrong-answer': 'rgba(255, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}
