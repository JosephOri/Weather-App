import { createTheme } from "@mui/material/styles";

export const basicTheme = createTheme({
  palette: {
    primary: {
      main: "#4a90e2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff9800",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f0f4f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#333333",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#333333",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#666666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#4a90e2",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#357ABD",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});
