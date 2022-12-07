/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCyan: "#3c8067",
        cream: "#f2ebe3",
        veryDarkBlue: "#1c232b",
        darkGrayishBlue: "#6c7289",
        white: "#ffffff",
      },
      screens: {
        xs: "375px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1440px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
