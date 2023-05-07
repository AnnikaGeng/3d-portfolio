/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // #222,224,221
        // #e0dedd #050816
        primary: "#Dddfda",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        overview: "#E1c78d",
        experience: "#5a5958",
        projects: "#161616",
        "brown": "#6c4c35",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "30px 60px 100px -15px #E0deda",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};