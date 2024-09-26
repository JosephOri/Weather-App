import { TextField, Box } from "@mui/material";
import { toast } from "react-toastify";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";
import SearchButton from "./SearchButton";

const CityNameInput = () => {
  const { cityName, setCityName } = useWeatherFormContext();

  const onCitySearch = () => {
    if (!cityName.trim()) {
      toast.error("Please enter a city name.");
      return;
    }
  };

  return (
    <Box className="flex space-x-2 w-full">
      <TextField
        label="City Name"
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <SearchButton onSearch={onCitySearch} />
    </Box>
  );
};

export default CityNameInput;
