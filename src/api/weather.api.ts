import axios from "axios";
import { WeatherResponse } from "../types/WeatherResponse";
import { ForecastResponse } from "../types/ForecastResponse";
import { ForecastDuration } from "../types/ForecastDuration";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherData = async (
  params: any,
  forecastDuration: ForecastDuration
) => {
  let url = "";
  let response;

  params.appid = apiKey;
  params.units = "metric";

  if (forecastDuration === "current") {
    url = `${baseUrl}/weather`;
    response = await axios.get<WeatherResponse>(url, { params });
  } else {
    url = `${baseUrl}/forecast`;
    params.cnt = forecastDuration === "3-day" ? 3 : 7;
    response = await axios.get<ForecastResponse>(url, { params });
  }
  return response.data;
};
