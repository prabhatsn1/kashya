import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F8BBD9", // Soft pink
      light: "#FFE4E1",
      dark: "#E91E63",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#E6E6FA", // Lavender
      light: "#F0F8FF",
      dark: "#9370DB",
      contrastText: "#333333",
    },
    tertiary: {
      main: "#F0FFF0", // Mint
      light: "#F5FFFA",
      dark: "#98FB98",
    },
    background: {
      default: "#FEFEFE",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C2C2C",
      secondary: "#666666",
    },
    error: {
      main: "#FF6B6B",
    },
    success: {
      main: "#51CF66",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 600,
      fontSize: "3rem",
      color: "#2C2C2C",
    },
    h2: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 500,
      fontSize: "2.5rem",
      color: "#2C2C2C",
    },
    h3: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 500,
      fontSize: "2rem",
      color: "#2C2C2C",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "#2C2C2C",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "#2C2C2C",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      color: "#2C2C2C",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#2C2C2C",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#666666",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 25,
          padding: "10px 24px",
          fontSize: "1rem",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(248, 187, 217, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
