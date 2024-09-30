import { WeatherFormContext } from "@/context/WeatherFormContext";
import { WeatherFormContextType } from "@/context/WeatherFormContext";
import { useAbstractContext } from "./useAbstractContext";

function useWeatherForm(): WeatherFormContextType {
  return useAbstractContext(WeatherFormContext);
}

export default useWeatherForm;
