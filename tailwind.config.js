module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white:"#fff",
      Navy: "#1D2D47",
      green: "#3FC0C2",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      Fraun: ['Fraunces', "serif"],
      sofia: ["Sofia Sans", "sans-serif"],
    },
    extend: {
      rotate: {
        '15': '15deg',
      }
    },
  },
  plugins: [],
};
