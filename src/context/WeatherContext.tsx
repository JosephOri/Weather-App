import React, { createContext, useState } from "react";
import { InputMethod } from "../types/InputMethod";
import { ContextDevTool } from "react-context-devtool";

export interface WeatherContextType {
  inputMethod: InputMethod;
  setInputMethod: (method: InputMethod) => void;
  cityName: string;
  setCityName: (name: string) => void;
  latitude: string;
  setLatitude: (lat: string) => void;
  longitude: string;
  setLongitude: (lon: string) => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputMethod, setInputMethod] = useState<InputMethod>("cityName");
  const [cityName, setCityName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  return (
    <WeatherContext.Provider
      value={{
        inputMethod,
        setInputMethod,
        cityName,
        setCityName,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
