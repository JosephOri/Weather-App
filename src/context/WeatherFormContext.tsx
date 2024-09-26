import React, { createContext, useState } from "react";
import { InputMethod } from "../types/InputMethod";
import { Coordinates, EmptyCoordinates } from "../types/Coordinates";

export interface WeatherFormContextType {
  inputMethod: InputMethod;
  setInputMethod: (method: InputMethod) => void;
  cityName: string;
  setCityName: (name: string) => void;
  coordinates: Coordinates;
  setCoordinates: (coordinates: Coordinates) => void;
  locationInput: string | Coordinates;
  setLocationInput: (location: string | Coordinates) => void;
}

export const WeatherFormContext = createContext<
  WeatherFormContextType | undefined
>(undefined);

export const WeatherFromProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputMethod, setInputMethod] = useState<InputMethod>("cityName");
  const [cityName, setCityName] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>(EmptyCoordinates);
  const [locationInput, setLocationInput] = useState<string | Coordinates>("");

  return (
    <WeatherFormContext.Provider
      value={{
        inputMethod,
        setInputMethod,
        cityName,
        setCityName,
        coordinates,
        setCoordinates,
        locationInput,
        setLocationInput,
      }}
    >
      {children}
    </WeatherFormContext.Provider>
  );
};
