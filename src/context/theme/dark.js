import color from './color.js';
// Todo: name color pallete for each section
const dark = {
  name: 'dark',
  style: {
    color: {
      ...color,
    },
    background: {
      primary: color.gray_950,
      secondary: color.gray_900,
      alternative: color.tertiary,
      quarternary: color.quarternary,
      black: color.black,
      white: color.white,
      grey800: color.gray_800,
      grey600: color.gray_600,
      grey500: color.gray_500,
    },
    text: {
      primary: color.white,
      secondary: color.gray_100,
      black: color.black,
      grey500: color.gray_500,
      grey400: color.gray_400,
      red200: color.red_200,
    },
    button: {
      primary: color.blue,
      secondary: color.red_200,
      tertiary: color.quarternary,
      borderRadius: '0.25rem',
    },
    panel: {
      borderRadius: '0.625rem',
    },
    input: {
      background: color.gray_750,
    },
    divider: {
      primary: color.blue,
      secondary: color.red_200,
      alternative: color.gray_600,
    },
    modal: {
      primary: color.quarternary,
      secondary: color.tertiary,
      borderColor: color.gray_600,
    },
  },
};

export default dark;
