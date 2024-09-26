import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../api/weather.api";
import useWeatherFormContext from "./useWeatherFromContext";

export const useWeatherData = () => {
  const { inputMethod, cityName, coordinates } = useWeatherFormContext();
  let queryKeySuffix = "";

  const fetchWeather = async () => {
    if (inputMethod === "cityName") {
      queryKeySuffix = cityName;
      return getWeatherData(cityName);
    } else if (inputMethod === "coordinates") {
      queryKeySuffix = `${coordinates.lat},${coordinates.long}`;
      return getWeatherData(coordinates);
    } else if (inputMethod === "currentLocation") {
      queryKeySuffix = `${coordinates.lat},${coordinates.long}`;
      return getWeatherData(coordinates);
    } else {
      throw new Error("Invalid input method");
    }
  };

  return useQuery({
    queryKey: ["weatherData", inputMethod, queryKeySuffix],
    queryFn: fetchWeather,
    enabled: false,
  });
};
