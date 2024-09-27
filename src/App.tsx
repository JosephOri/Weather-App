import { ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import HomePage from "./pages/HomePage";
import { WeatherFromProvider } from "./context/WeatherFormContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <WeatherFromProvider>
        <HomePage />
      </WeatherFromProvider>
    </ThemeProvider>
  );
};

export default App;
