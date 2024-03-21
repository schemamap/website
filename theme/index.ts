import { extendTheme } from "@chakra-ui/react";
import { theme as baseTheme } from "@saas-ui/react";
import { theme as glassTheme } from "@saas-ui/theme-glass";

import components from "./components";
import { fontSizes } from "./foundations/typography";

import "@fontsource/inter/variable.css";

const styles = {
  global: (props: any) => ({
    body: {
      color: "gray.900",
      bg: "white",
      fontSize: "lg",
      _dark: {
        color: "white",
        bg: "gray.900",
      },
    },
  }),
};

export default extendTheme(
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
  },
    styles,
    fontSizes,
    components,
  },
  glassTheme,
  baseTheme
);
