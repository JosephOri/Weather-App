import { TextField } from "@mui/material";
import useWeatherContext from "../../hooks/useWeatherContext";

const CityNameInput = () => {
  const { cityName, setCityName } = useWeatherContext();

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
