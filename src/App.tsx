import { ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
