/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Oranienbaum: 'Oranienbaum',
        'Montserrat-Regular': 'Montserrat-Regular',
      }
    },
  },
  plugins: [],
}
