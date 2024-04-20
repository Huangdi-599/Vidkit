/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#AB1EAA",
        secondary:"#FF42F7",
        BgColor:"#FFF5FF",
        textHead:"#1d1d1d",
        textBody:"#444444"
      },
      boxShadow:{
        primary: '0px 4px 4px rgba(0, 0, 0, 0.08)'

      }
    },
  },
  plugins: [],
}