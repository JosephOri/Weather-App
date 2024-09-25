import axios from "axios";
import { WeatherResponse } from "../types/WeatherResponse";

export const getWeatherData = async (url: string) => {
  try {
    const response = await axios.get<WeatherResponse>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
};
