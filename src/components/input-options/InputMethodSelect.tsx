import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";
import { InputMethod } from "../../types/InputMethod";

const InputMethodSelect = () => {
  const { inputMethod, setInputMethod } = useWeatherFormContext();
  return (
    <FormControl variant="outlined" size="small" className="w-full md:w-1/2">
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
  );
};

export default InputMethodSelect;
