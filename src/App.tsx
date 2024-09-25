import { ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { WeatherProvider } from "./context/WeatherContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </WeatherProvider>
    </ThemeProvider>
  );
};

export default App;
