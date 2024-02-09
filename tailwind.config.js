/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Raleway:"Raleway"
      },
      colors:{
        primary:"#eb6c14",
        primary2:"#eb6c1450",
        text:"#1e1c1b",
        icon:"#84786e",
        buttons:"#f3f2ef",
        highlight:"#5A5A5A"
      }
    },
  },
  plugins: [],
}

