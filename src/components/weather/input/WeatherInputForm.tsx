import { Box } from "@mui/material";
import useWeatherForm from "@/hooks/context/useWeatherForm";
import {
  CityNameInput,
  CoordinatesInput,
  CurrentLocationMessage,
  ForecastDurationSelect,
  InputMethodSelect,
} from "./";

const WeatherInputForm = () => {
  const { inputMethod } = useWeatherForm();
  return (
    <Box className="flex flex-col md:flex-row md:items-start md:space-x-4 space-y-4 md:space-y-0 md:justify-between">
      <InputMethodSelect />
      <ForecastDurationSelect />
      <Box className="flex flex-col md:flex-row md:justify-between md:space-x-4 space-y-4 md:space-y-0 w-full">
        {inputMethod === "cityName" && <CityNameInput />}
        {inputMethod === "coordinates" && <CoordinatesInput />}
        {inputMethod === "currentLocation" && <CurrentLocationMessage />}
      </Box>
    </Box>
  );
};

export default WeatherInputForm;
