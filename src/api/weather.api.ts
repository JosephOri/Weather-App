// src/api/weather.api.ts

import axios from "axios";
import { WeatherResponse } from "../types/WeatherResponse";
import { Coordinates } from "../types/Coordinates";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherData = async (
  location: string | Coordinates,
  units: string = "metric"
) => {
  let url = "";

  if (typeof location === "string") {
    url = `${baseUrl}/weather?q=${location}&appid=${apiKey}&units=${units}`;
  } else {
    url = `${baseUrl}/weather?lat=${location.lat}&lon=${location.long}&appid=${apiKey}&units=${units}`;
  }

  const response = await axios.get<WeatherResponse>(url);
  return response.data;
};
