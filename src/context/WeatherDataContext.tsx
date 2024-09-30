import { createContext } from "react";
import { useWeatherQuery } from "../hooks/useWeatherQuery";
import { ForecastResponse } from "../types/ForecastResponse";
import { WeatherResponse } from "../types/WeatherResponse";

export interface WeatherDataContextType {
  data?: WeatherResponse | ForecastResponse;
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
}

export const WeatherDataContext = createContext<
  WeatherDataContextType | undefined
>(undefined);

const WeatherDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: weatherData,
    isError: isWeatherError,
    isLoading: isWeatherLoading,
    refetch: refetchWeather,
  } = useWeatherQuery();
  return (
    <WeatherDataContext.Provider
      value={{
        data: weatherData,
        isError: isWeatherError,
        isLoading: isWeatherLoading,
        refetch: refetchWeather,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataProvider;
