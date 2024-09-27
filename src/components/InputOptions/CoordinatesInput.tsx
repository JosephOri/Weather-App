import { Box, TextField } from "@mui/material";
import { toast } from "react-toastify";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";
import SearchButton from "./SearchButton";

const CoordinatesInput = () => {
  const { coordinates, setCoordinates } = useWeatherFormContext();
  const onCoordinatesSearch = async () => {
    if (!coordinates.lat || !coordinates.long) {
      toast.error("Please enter both latitude and longitude.");
      return false;
    }
    return true;
  };
  return (
    <Box className="flex space-x-4 w-full">
      <TextField
        label="Latitude"
        variant="outlined"
        size="small"
        type="number"
        placeholder="e.g., 37.7749"
        value={coordinates.lat ?? ""}
        onChange={(e) =>
          setCoordinates({
            lat: parseFloat(e.target.value),
            long: coordinates.long,
          })
        }
        fullWidth
      />
      <TextField
        label="Longitude"
        variant="outlined"
        size="small"
        type="number"
        placeholder="e.g., -122.4194"
        value={coordinates.long ?? ""}
        onChange={(e) =>
          setCoordinates({
            lat: coordinates.lat,
            long: parseFloat(e.target.value),
          })
        }
        fullWidth
      />
      <SearchButton validateSearch={onCoordinatesSearch} />
    </Box>
  );
};

export default CoordinatesInput;
