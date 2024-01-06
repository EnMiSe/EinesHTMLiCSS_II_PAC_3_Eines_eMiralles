/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gris-10': 'rgba(255, 255, 255, 0.1)',
        'blanc-t': '#fff',
        'gris-t': '#535252', 
      }
    },
  },
  plugins: [ "prettier-plugin-tailwindcss" ],
}

