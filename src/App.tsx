import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import HomePage from "./pages/HomePage";
import { WeatherFormProvider } from "./context/WeatherFormContext";
import { lightTheme, darkTheme } from "./theme/themes";
import { useThemeMode } from "./hooks/context/useThemeMode";
import WeatherDataProvider from "./context/WeatherDataContext";

const App: React.FC = () => {
  const { isDarkMode } = useThemeMode();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <WeatherFormProvider>
        <WeatherDataProvider>
          <HomePage />
        </WeatherDataProvider>
      </WeatherFormProvider>
    </ThemeProvider>
  );
};

export default App;
