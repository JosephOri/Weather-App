import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import "./global.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
