import color from "./color.js";
const light = {
  name: "light",
  style: {
    color: {
      ...color,
    },
    background: {
      primary: color.gray_100,
      secondary: color.gray_200,
    },
    text: {
      primary: color.black,
      secondary: color.gray_800,
    },
    button: {
      primary: color.red,
      secondary: color.red,
    },
  },
};

export default light;
