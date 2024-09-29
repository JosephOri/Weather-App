import {
  WeatherDataContext,
  WeatherDataContextType,
} from "../../context/WeatherDataContext";
import { useAbstractContext } from "./useAbstractContext";

export const useData = (): WeatherDataContextType => {
  return useAbstractContext(WeatherDataContext);
};
