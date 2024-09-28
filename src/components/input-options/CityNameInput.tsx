import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import useWeatherFormContext from "../../hooks/context/useWeatherFormContext";
import SearchButton from "./SearchButton";

const CityNameInput = () => {
  const { cityName, setCityName } = useWeatherFormContext();

  const onCitySearch = async () => {
    let isValid = true;
    if (!cityName.trim()) {
      toast.error("Please enter a city name.");
      isValid = false;
    }
    return new Promise<boolean>((resolve) => resolve(isValid));
  };

  return (
    <>
      <TextField
        label="City Name"
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <SearchButton validateSearch={onCitySearch} />
    </>
  );
};

export default CityNameInput;
