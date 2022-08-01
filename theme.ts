import { createTheme } from "@mui/material/styles";

const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });
import "@mui/material/styles";

import { SimplePaletteColorOptions } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;

const theme = createTheme({
  palette: {
    primary: createColor("#4C54F5"),
    secondary: createColor("#FD4F6E"),
    search: createColor("#202740"),
    textColor: createColor("#ffffff"),
    buttonsInactive: createColor("#C1CEF1"),
    highlightedFrames: createColor("#323F62"),
    gray: createColor("#7787B1"),
    grayText: createColor("#848B9F"),
    dropDown: createColor("#182031"),
    lines: createColor("#293150"),
    bgColor: createColor("#111820"),
    yellow: createColor("#EAD359"),
    navBar: createColor("#192233"),
    success: {
      main: "#59EAD0",
    },

    primaryGradient: {
      main: "rgb(89,238,202)",
      contrastText: "#151D2E",
      gradient: "linear-gradient(to right, #59EECA, #59D3EE)",
    },

    action: {
      disabledBackground: "#C1CEF1",
      disabled: "#6574A7",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          border: "1px solid #6574A7",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "36px",
          backgroundColor: "#101828",
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 480,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1600,
    },
  },

  typography: {
    fontFamily: ["Prompt", "sans-serif"].join(","),

    secondaryFont: ["Mulish", "sans-serif"].join(","),

    allVariants: {
      color: "#ffffff",
    },

    h1: {
      fontWeight: 500,
      fontSize: "55px",
      lineHeight: "71px",
    },

    h2: {
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: "44px",
    },

    h3: {
      fontWeight: 800,
      fontSize: "24px",
      lineHeight: "32px",
    },

    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "28px",
    },
  },
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    secondaryFont: string;
  }

  interface TypographyVariantsOptions {
    secondaryFont?: string;
  }

  interface CustomPalette {
    search: SimplePaletteColorOptions;
    textColor: SimplePaletteColorOptions;
    buttonsInactive: SimplePaletteColorOptions;
    highlightedFrames: SimplePaletteColorOptions;
    gray: SimplePaletteColorOptions;
    grayText: SimplePaletteColorOptions;
    dropDown: SimplePaletteColorOptions;
    lines: SimplePaletteColorOptions;
    bgColor: SimplePaletteColorOptions;
    yellow: SimplePaletteColorOptions;
    navBar: SimplePaletteColorOptions;

    primaryGradient?: {
      main?: string;
      contrastText: string;
      gradient?: string;
    };
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    secondaryFont: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primaryGradient: true;
  }
}

export default theme;
