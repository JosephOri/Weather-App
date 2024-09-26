import { InputMethod } from "../types/InputMethod";
import { WeatherResponse } from "../types/WeatherResponse";
import { createContext, useState } from "react";

export interface WeatherDataContextType {
  weatherData?: WeatherResponse;
  isSearched: boolean;
  setIsSearched: (isSearched: boolean) => void;
  handleSearch: (inputMethod: InputMethod) => void;
}

export const WeatherDataContext = createContext<
  WeatherDataContextType | undefined
>(undefined);

export const WeatherDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSearched, setIsSearched] = useState(false);
};
