import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../api/weather.api";
import useWeatherFormContext from "./useWeatherFromContext";

export const useWeatherData = () => {
  const { inputMethod, cityName, coordinates } = useWeatherFormContext();

  const fetchWeather = async () => {
    if (inputMethod === "cityName") {
      return getWeatherData(cityName);
    } else if (inputMethod === "coordinates") {
      return getWeatherData(coordinates);
    } else if (inputMethod === "currentLocation") {
      return getWeatherData(coordinates);
    } else {
      throw new Error("Invalid input method");
    }
  };

  return useQuery({
    queryKey: ["weatherData", inputMethod, cityName, coordinates],
    queryFn: fetchWeather,
    enabled: false,
  });
};
