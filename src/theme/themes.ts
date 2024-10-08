import { createTheme } from "@mui/material/styles";
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
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#F9FFFF",
          background: `linear-gradient(90deg, rgba(249,255,255,1) 0%, rgba(56,200,230,1) 61%)`,
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#727E8E",
          "&.Mui-focused": {
            color: "#727E8E",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            color: "#727E8E",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "20px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#7eaed2",
          "&.Mui-focused": {
            color: "#7eaed2",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7eaed2",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "20px",
          },
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
