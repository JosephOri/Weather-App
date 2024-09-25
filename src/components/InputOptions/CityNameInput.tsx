import { TextField } from "@mui/material";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";

const CityNameInput = () => {
  const { cityName, setCityName } = useWeatherFormContext();

  return (
    <TextField
      label="City Name"
      variant="outlined"
      size="small"
      fullWidth
      placeholder="Enter city name"
      value={cityName}
      onChange={(e) => setCityName(e.target.value)}
    />
  );
};

export default CityNameInput;
