/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "Poppins",
        Title:"Poppins"
      },
      colors: {
        primary: "#ff5b54",
        primary2: "#ffeeed",
        text: "#1e1c1b",
        icon: "#84786e",
        buttons: "#f3f2ef",
        highlight: "#5A5A5A"
      }
    },
  },
  plugins: [],
});

