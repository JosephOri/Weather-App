import { Box, TextField, Button } from "@mui/material";
import useWeatherContext from "../../hooks/useWeatherContext";

const CityNameInput = () => {
  const { cityName, setCityName } = useWeatherContext();

  return (
    <Box mt={2}>
      <TextField
        label="City Name"
        variant="outlined"
        fullWidth
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Box className="mt-4">
        <Button variant="contained" color="primary" fullWidth>
          Get Weather
        </Button>
      </Box>
    </Box>
  );
};

export default CityNameInput;
