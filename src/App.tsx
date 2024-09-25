import { ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import HomePage from "./pages/HomePage";
import { WeatherProvider } from "./context/WeatherContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <WeatherProvider>
        <HomePage />
      </WeatherProvider>
    </ThemeProvider>
  );
};

export default App;
