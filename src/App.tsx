import { ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { WeatherProvider } from "./context/WeatherContext";
import WeatherPage from "./pages/WeatherPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </WeatherProvider>
    </ThemeProvider>
  );
};

export default App;
