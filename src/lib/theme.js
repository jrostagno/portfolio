import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Fira Mono'`,
    body: `'Inter'`,
  },
  styles: {
    global: {
      "html, body": {
        height: "100%",
        backgroundColor: "#0A192F",
      },
    },
  },

  colors: {
    primary: "#0A192F",
    secondary: "#f1f5f9", //slate 100
    terciary: "#81E6D9", // Teal 200
    slate200Terciary: "#e2e8f0", //slate 200
    slate300Cuaternary: "#cbd5e1", //stalte 300
  },
  // fontSizes: {
  //   sm: "0.9375rem",
  //   xs: "0.8125rem",
  //   lg: "1.25rem",
  //   xl: "2rem",
  //   xlg: "2.5rem",
  //   xxl: "6.875rem",
  // },
  // letterSpacings: {
  //   wider: "0.04em",
  //   wide: "0.03em",
  //   tight: "-0.02em",
  //   tighter: "-0,04em",
  // },
  // lineHeights: {
  //   6: "3.5rem",
  //   7: "4.25rem",
  //   9: "6.125rem",
  //   10: "6.87rem",
  // },
  // borderRadius: {
  //   base: "16px",
  // },
});
