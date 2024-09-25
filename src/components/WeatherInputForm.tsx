import useWeatherContext from "../hooks/useWeatherContext";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";
import { InputMethod } from "../types/InputMethod";
import CityNameInput from "./InputOptions/CityNameInput";
import CoordinatesInput from "./InputOptions/CoordinatesInput";
import CurrentLocationMessage from "./InputOptions/CurrentLocationMessage";

const WeatherInputForm = () => {
  const { inputMethod, setInputMethod } = useWeatherContext();

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <FormControl component="fieldset" fullWidth>
        <Typography variant="h6" gutterBottom>
          How would you like to get the weather?
        </Typography>
        <RadioGroup
          aria-label="input-method"
          name="input-method"
          value={inputMethod}
          onChange={(e) => setInputMethod(e.target.value as InputMethod)}
        >
          <FormControlLabel
            value="cityName"
            control={<Radio />}
            label="By City name"
          />
          <FormControlLabel
            value="coordinates"
            control={<Radio />}
            label="By coordinates"
          />
          <FormControlLabel
            value="currentLocation"
            control={<Radio />}
            label="Use my Current Location"
          />
        </RadioGroup>
      </FormControl>

      {inputMethod === "cityName" && <CityNameInput />}
      {inputMethod === "coordinates" && <CoordinatesInput />}
      {inputMethod === "currentLocation" && <CurrentLocationMessage />}
    </Box>
  );
};

export default WeatherInputForm;
