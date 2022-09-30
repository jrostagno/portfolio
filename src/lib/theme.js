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
    navy: "#0A192F",
    slate100: "#f1f5f9", //slate 100
    teal200: "#81E6D9", // Teal 200
    slate200: "#e2e8f0", //slate 200
    slate300: "#cbd5e1", //stalte 300
  },
});
