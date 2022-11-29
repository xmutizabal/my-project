/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tema: {
          100: '#FF731D',
          200: '#FFF7E9',
          300: '#5F9DF7',
          400: '#1746A2'
        }
      }
    },
  },
  plugins: [],
}
