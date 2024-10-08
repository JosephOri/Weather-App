import useWeatherForm from "./context/useWeatherForm";
import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../api/weather.api";

export const useWeatherQuery = () => {
  const { inputMethod, cityName, coordinates, forecastDuration } =
    useWeatherForm();

  const fetchWeather = async () => {
    let params = {};
    if (inputMethod === "cityName") {
      params = { q: cityName };
    } else {
      params = { lat: coordinates.lat, lon: coordinates.long };
    }
    return getWeatherData(params, forecastDuration);
  };

  const generateQueryKey = () => {
    const queryKey = [];
    queryKey.push(inputMethod);
    if (inputMethod === "cityName") {
      queryKey.push(cityName.trim());
    } else {
      queryKey.push(coordinates.lat, coordinates.long);
    }
    queryKey.push(forecastDuration);
    return queryKey;
  };

  return useQuery({
    queryKey: generateQueryKey(),
    queryFn: fetchWeather,
    enabled: false,
    staleTime: 1000 * 60 * 5,
  });
};
