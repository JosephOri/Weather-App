import {
  WeatherDataContext,
  WeatherDataContextType,
} from "@/context/WeatherDataContext";
import { useAbstractContext } from "./useAbstractContext";

export const useWeatherData = (): WeatherDataContextType => {
  return useAbstractContext(WeatherDataContext);
};
