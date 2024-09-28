import React from "react";
import { Box } from "@mui/material";
import useWeatherFormContext from "../hooks/useWeatherFormContext";
import CityNameInput from "./input-options/CityNameInput";
import CoordinatesInput from "./input-options/CoordinatesInput";
import CurrentLocationMessage from "./input-options/CurrentLocationMessage";
import ForecastDurationSelect from "./input-options/ForecastDurationSelect";
import InputMethodSelect from "./input-options/InputMethodSelect";

const WeatherInputForm: React.FC = () => {
  const { inputMethod } = useWeatherFormContext();
  return (
    <Box className="w-full p-4">
      <Box className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 max-w-4xl md:mx-auto">
        <InputMethodSelect />
        <ForecastDurationSelect />
        <Box className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
          {inputMethod === "cityName" && <CityNameInput />}
          {inputMethod === "coordinates" && <CoordinatesInput />}
          {inputMethod === "currentLocation" && <CurrentLocationMessage />}
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherInputForm;
