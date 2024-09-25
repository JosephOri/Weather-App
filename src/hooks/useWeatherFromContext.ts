import { useContext } from "react";
import { WeatherFormContext } from "../context/WeatherFormContext";
import { WeatherContextType } from "../context/WeatherFormContext";

function useWeatherFormContext(): WeatherContextType {
  const context = useContext(WeatherFormContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
}

export default useWeatherFormContext;
