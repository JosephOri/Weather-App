import { WeatherDataContext } from "../../context/WeatherDataContext";
import { useAbstractContext } from "./useAbstractContext";

export const useData = () => {
  return useAbstractContext(WeatherDataContext);
};
