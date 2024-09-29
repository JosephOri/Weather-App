import { useContext } from "react";
import { WeatherFormContext } from "../../context/WeatherFormContext";
import { WeatherFormContextType } from "../../context/WeatherFormContext";

function useWeatherForm(): WeatherFormContextType {
  const context = useContext(WeatherFormContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
}

export default useWeatherForm;
