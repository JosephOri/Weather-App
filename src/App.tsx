import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { basicTheme } from "./theme/basicTheme";
import HomePage from "./pages/HomePage";
import { WeatherFormProvider } from "./context/WeatherFormContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <WeatherFormProvider>
        <div
          style={{
            backgroundColor: basicTheme.palette.background.default,
            minHeight: "100vh",
          }}
        >
          <HomePage />
        </div>
      </WeatherFormProvider>
    </ThemeProvider>
  );
};

export default App;
