import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Lalezar, sans-serif",
    body: "Noto Sans Arabic, sans-serif",
  },
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "109em",
  },
});

export default theme;
