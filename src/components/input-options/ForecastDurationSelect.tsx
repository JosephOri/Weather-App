import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";
import { ForecastDuration } from "../../types/ForecastDuration";

const ForecastDurationSelect: React.FC = () => {
  const { forecastDuration, setForecastDuration } = useWeatherFormContext();

  return (
    <FormControl variant="outlined" size="small" className="w-full md:w-1/2">
      <InputLabel id="forecast-duration-label">Forecast</InputLabel>
      <Select
        labelId="forecast-duration-label"
        id="forecast-duration"
        value={forecastDuration}
        onChange={(e) =>
          setForecastDuration(e.target.value as ForecastDuration)
        }
        label="Forecast"
      >
        <MenuItem value="current">Current</MenuItem>
        <MenuItem value="3-day">3-Day</MenuItem>
        <MenuItem value="5-day">5-Day</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ForecastDurationSelect;
