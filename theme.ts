import { createTheme } from "@mui/material/styles";

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
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
    goodFilmRating: createColor("#57FEA8"),
    normalFilmRating: createColor("#e8fe57"),
    badFilmRating: createColor("#fe5757"),

    success: {
      main: "#59EAD0",
    },

    primaryGradient: {
      main: "rgb(89,238,202)",
      contrastText: "#151D2E",
      gradient: "linear-gradient(to right, #FF4A4C, #FF4A8B)",
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
        },
      },
      variants: [
        {
          props: { size: "large" },
          style: { fontSize: "16px", padding: "15px 55px", borderRadius: "16px" },
        },
        {
          props: { size: "medium" },
          style: { fontSize: "16px", padding: "11px 31px", borderRadius: "16px" },
        },
        {
          props: { size: "small" },
          style: { fontSize: "16px", padding: "5px", borderRadius: "16px" },
        },
      ],
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
      color: "#C4C4C4",
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
    goodFilmRating: SimplePaletteColorOptions;
    normalFilmRating: SimplePaletteColorOptions;
    badFilmRating: SimplePaletteColorOptions;

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
    gradient: true;
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    goodFilmRating: true;
    normalFilmRating: true;
    badFilmRating: true;
  }
}

export default theme;
