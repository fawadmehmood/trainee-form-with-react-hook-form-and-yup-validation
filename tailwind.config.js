/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.jsx",
    "./src/sharedComponents/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
      flexBasis: {
        "1/7": "15.097%",
      },
      colors: {
        blue: "#273C75",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "750px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
