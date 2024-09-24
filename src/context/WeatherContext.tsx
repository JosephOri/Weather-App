import React, { createContext, useState } from "react";
import { InputMethod } from "../types/InputMethod";
import { Coordinates, EmptyCoordinates } from "../types/Coordinates";

export interface WeatherContextType {
  inputMethod: InputMethod;
  setInputMethod: (method: InputMethod) => void;
  cityName: string;
  setCityName: (name: string) => void;
  coordinates: Coordinates;
  setCoordinates: (coordinates: Coordinates) => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputMethod, setInputMethod] = useState<InputMethod>("cityName");
  const [cityName, setCityName] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>(EmptyCoordinates);

  return (
    <WeatherContext.Provider
      value={{
        inputMethod,
        setInputMethod,
        cityName,
        setCityName,
        coordinates,
        setCoordinates,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
