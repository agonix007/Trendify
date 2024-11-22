/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#fbfbfb",
        card: "#f8f8f8",
        arrow: "#fffff5",
      },
      fontFamily: {
        synco: ["Syncopate", "sans-serif"],
        lyons: ["Lyons", "sans-serif"],
        josef: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
