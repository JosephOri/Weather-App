import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useWeatherForm from "../../../hooks/context/useWeatherForm";
import { ForecastDuration } from "../../../types/ForecastDuration";

const ForecastDurationSelect = () => {
  const { forecastDuration, setForecastDuration } = useWeatherForm();

  return (
    <FormControl variant="outlined" size="small" className="w-full md:w-1/4">
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
        <MenuItem value="7-day">7-Day</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ForecastDurationSelect;
