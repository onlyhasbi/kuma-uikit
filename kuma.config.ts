import { createTheme } from "@kuma-ui/core";

const defaultThemeConfig = {
  primary: "#2c639d",
  secondary: "#c44c4a",
  color: {
    light: "#333",
    dark: "#fff",
  },
  borderRadius: "6px",
  fontWeight: 400,
};

const theme = createTheme({
  fontWeights: {
    xlight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    xbold: 800,
  },
  spacings: {
    wide: "0.05rem",
  },
  colors: {
    primary: defaultThemeConfig.primary,
    secondary: defaultThemeConfig.secondary,
  },
  components: {
    Button: {
      defaultProps: {
        boxSizing: "border-box",
        borderRadius: defaultThemeConfig.borderRadius,
        border: "1px solid transparent",
        py: "8px",
        fontSize: "14px",
        fontWeight: defaultThemeConfig.fontWeight,
      },
    },
  },
});

type UserTheme = typeof theme;
declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
