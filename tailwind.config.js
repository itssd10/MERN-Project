/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "red" : "#E83A14",
        "pink": "#FF6868",
        "secondary": "#555555",
        "primarybg":"#FFFFFF",
        "yellow": "#FFF9B2",
        "star": "#FFE605"

      }
    },
  },
  plugins: [ require('daisyui')],
  daisyui: {
    themes: ["light","cupcake"],
  },
}



