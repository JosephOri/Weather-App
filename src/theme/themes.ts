import { createTheme } from "@mui/material/styles";
import lightBg from "../assets/bg.svg";
import darkBg from "../assets/darkBg.svg";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F9FFFF",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#2F5D8A",
    },
    secondary: {
      main: "#38C8E6",
    },
    text: {
      primary: "#727E8E",
      secondary: "#6898d5",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${lightBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#F9FFFF",
          background: `linear-gradient(180deg, #F9FFFF 0%, #38C8E6 100%)`,
        },
        "#root": {
          height: "100%",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#727E8E",
          "&::placeholder": {
            color: "#6898d5",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#fff",
        },
        track: {
          backgroundColor: "#77b1c7",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
          borderBottom: "1px solid #ccc",
        },
      },
    },
  },
  typography: {
    h6: {
      color: "#2F5D8A",
    },
    body1: {
      color: "#7B98B2",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#031027",
      paper: "#051A33",
    },
    primary: {
      main: "#2F5D8A",
    },
    secondary: {
      main: "#02101D",
    },
    text: {
      primary: "#5f8bbf",
      secondary: "#235A84",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${darkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#031027",
          background: `linear-gradient(180deg, #031027 0%, #02101D 100%)`,
        },
        "#root": {
          height: "100%",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#051A33",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#5f8bbf",
          "&::placeholder": {
            color: "#235A84",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#437abd",
        },
        track: {
          backgroundColor: "#1b3657",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f2744",
          "&:hover": {
            backgroundColor: "#183553",
          },
          borderBottom: "1px solid #356097",
        },
      },
    },
  },
  typography: {
    h6: {
      color: "#2F5D8A",
    },
    body1: {
      color: "#3975AB",
    },
  },
});
