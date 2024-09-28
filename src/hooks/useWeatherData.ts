import useWeatherFormContext from "./useWeatherFormContext";
import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../api/weather.api";

export const useWeatherData = () => {
  const { inputMethod, cityName, coordinates, forecastDuration, shouldFetch } =
    useWeatherFormContext();

  const fetchWeather = async () => {
    let params = {};
    if (inputMethod === "cityName") {
      params = { q: cityName };
    } else {
      params = { lat: coordinates.lat, lon: coordinates.long };
    }
    return getWeatherData(params, forecastDuration);
  };

  return useQuery({
    queryKey: [
      "weatherData",
      inputMethod,
      cityName,
      coordinates,
      forecastDuration,
    ],
    queryFn: fetchWeather,
    enabled: shouldFetch,
  });
};
