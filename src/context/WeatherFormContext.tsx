import React, { createContext, useState } from "react";
import { InputMethod } from "../types/InputMethod";
import { Coordinates, EmptyCoordinates } from "../types/Coordinates";
import { ForecastDuration } from "../types/ForecastDuration";
export interface WeatherFormContextType {
  inputMethod: InputMethod;
  setInputMethod: (method: InputMethod) => void;
  cityName: string;
  setCityName: (name: string) => void;
  coordinates: Coordinates;
  setCoordinates: (coordinates: Coordinates) => void;
  forecastDuration: ForecastDuration;
  setForecastDuration: (duration: ForecastDuration) => void;
}

export const WeatherFormContext = createContext<
  WeatherFormContextType | undefined
>(undefined);

export const WeatherFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputMethod, setInputMethod] = useState<InputMethod>("cityName");
  const [cityName, setCityName] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>(EmptyCoordinates);

  const [forecastDuration, setForecastDuration] =
    useState<ForecastDuration>("current");

  return (
    <WeatherFormContext.Provider
      value={{
        inputMethod,
        setInputMethod,
        cityName,
        setCityName,
        coordinates,
        setCoordinates,
        forecastDuration,
        setForecastDuration,
      }}
    >
      {children}
    </WeatherFormContext.Provider>
  );
};
