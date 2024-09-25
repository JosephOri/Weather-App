import useWeatherFormContext from "../hooks/useWeatherContext";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { InputMethod } from "../types/InputMethod";
import CityNameInput from "./InputOptions/CityNameInput";
import CoordinatesInput from "./InputOptions/CoordinatesInput";
import CurrentLocationMessage from "./InputOptions/CurrentLocationMessage";

const WeatherInputForm = () => {
  const { inputMethod, setInputMethod } = useWeatherFormContext();

  return (
    <Box className="w-full p-4">
      <Box className="flex items-center space-x-4 max-w-4xl mx-auto">
        <FormControl variant="outlined" size="small" className="w-1/4">
          <InputLabel id="input-method-label">Search By</InputLabel>
          <Select
            labelId="input-method-label"
            id="input-method"
            value={inputMethod}
            onChange={(e) => setInputMethod(e.target.value as InputMethod)}
            label="Search By"
          >
            <MenuItem value="cityName">City Name</MenuItem>
            <MenuItem value="coordinates">Coordinates</MenuItem>
            <MenuItem value="currentLocation">Current Location</MenuItem>
          </Select>
        </FormControl>

        {inputMethod === "cityName" && <CityNameInput />}
        {inputMethod === "coordinates" && <CoordinatesInput />}
        {inputMethod === "currentLocation" && <CurrentLocationMessage />}
        <Button variant="contained" color="primary" size="medium">
          search
        </Button>
      </Box>
    </Box>
  );
};

export default WeatherInputForm;
