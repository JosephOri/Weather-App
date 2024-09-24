import useWeatherContext from "../hooks/useWeatherContext";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Button,
} from "@mui/material";
import { InputMethod } from "../types/InputMethod";
import CityNameInput from "./CityNameInput";
import CoordinatesInput from "./CoordinatesInput";
import CurrentLocationMessage from "./CurrentLocationMessage";

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
          Select Input Method
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
            label="City Name"
          />
          <FormControlLabel
            value="coordinates"
            control={<Radio />}
            label="Coordinates"
          />
          <FormControlLabel
            value="currentLocation"
            control={<Radio />}
            label="Use Current Location"
          />
        </RadioGroup>
      </FormControl>

      {inputMethod === "cityName" && <CityNameInput />}
      {inputMethod === "coordinates" && <CoordinatesInput />}
      {inputMethod === "currentLocation" && <CurrentLocationMessage />}

      <Box mt={4}>
        <Button variant="contained" color="primary" fullWidth>
          Get Weather
        </Button>
      </Box>
    </Box>
  );
};

export default WeatherInputForm;
