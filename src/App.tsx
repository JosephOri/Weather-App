import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import "./global.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <h1>hello world</h1>
    </ThemeProvider>
  );
};

export default App;
