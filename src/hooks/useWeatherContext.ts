import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { WeatherContextType } from "../context/WeatherContext";

function useWeatherContext(): WeatherContextType {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
}

export default useWeatherContext;
