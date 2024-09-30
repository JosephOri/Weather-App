import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useWeatherForm from "../../hooks/context/useWeatherForm";
import { InputMethod } from "../../types/InputMethod";

const InputMethodSelect = () => {
  const { inputMethod, setInputMethod } = useWeatherForm();
  return (
    <FormControl variant="outlined" size="small" className="w-full md:w-1/4">
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
