const withMT = require("@material-tailwind/react/utils/withMT");
const { Container } = require("postcss");
// const { color } = require("framer-motion");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        russoOne: ["Russon One"],
        Inter: ["Inter"],
        PetitFormal: ["Petit Formal Script"]
      },
      colors: {
        Text: "black" // Assuming you meant 'colors' instead of 'color'
      }
    },
    backgroundImage: {
      wrapperBg: "url(assets/assets/images/wrapperBackground.svg)",
      wrapperDark: "url('assets/assets/images/wrapperDark.svg')",
    },
    Container: {
      sm: "640px",
      md: "767px",
      lg: "1140px",
      xl: "1440px",
      "2xl": "1800px"
    },
  },
  plugins: [],
});
