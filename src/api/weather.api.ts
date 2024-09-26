import axios from "axios";
import { WeatherResponse } from "../types/WeatherResponse";
import { Coordinates } from "../types/Coordinates";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherData = async (
  location: string | Coordinates,
  units: string = "metric"
) => {
  const url =
    typeof location === "string"
      ? `${baseUrl}/weather?q=${location}&appid=${apiKey}&units=${units}`
      : `${baseUrl}/weather?lat=${location.lat}&lon=${location.long}&appid=${apiKey}&units=${units}`;

  const response = await axios.get<WeatherResponse>(url);
  return response.data;
};
