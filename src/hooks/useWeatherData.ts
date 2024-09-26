import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../api/weather.api";
import useWeatherFormContext from "./useWeatherFromContext";

export const useWeatherData = () => {
  const { inputMethod, cityName, coordinates } = useWeatherFormContext();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  let url = "";

  const fetchWeather = async () => {
    url =
      inputMethod === "cityName"
        ? `${baseUrl}/weather?q=${cityName}&appid=${apiKey}&units=metric`
        : `${baseUrl}/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${apiKey}&units=metric`;
    return getWeatherData(url);
  };

  return useQuery({
    queryKey: ["weatherData", url],
    queryFn: fetchWeather,
    enabled: false,
  });
};
