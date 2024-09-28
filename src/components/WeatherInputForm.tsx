import React from "react";
import { Box } from "@mui/material";
import useWeatherFormContext from "../hooks/context/useWeatherFormContext";
import CityNameInput from "./input-options/CityNameInput";
import CoordinatesInput from "./input-options/CoordinatesInput";
import CurrentLocationMessage from "./input-options/CurrentLocationMessage";
import ForecastDurationSelect from "./input-options/ForecastDurationSelect";
import InputMethodSelect from "./input-options/InputMethodSelect";

const WeatherInputForm: React.FC = () => {
  const { inputMethod } = useWeatherFormContext();
  return (
    <Box>
      <Box className="flex flex-col md:flex-row md:items-start md:space-x-4 space-y-4 md:space-y-0 md:justify-between">
        <InputMethodSelect />
        <ForecastDurationSelect />
        <Box className="flex flex-col md:flex-row md:justify-between md:space-x-4 space-y-4 md:space-y-0 w-full">
          {inputMethod === "cityName" && <CityNameInput />}
          {inputMethod === "coordinates" && <CoordinatesInput />}
          {inputMethod === "currentLocation" && <CurrentLocationMessage />}
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherInputForm;
