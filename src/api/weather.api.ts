import axios from "axios";
import { WeatherResponse } from "../types/WeatherResponse";

export const getWeatherData = async (url: string) => {
  const response = await axios.get<WeatherResponse>(url);
  return response.data;
};
