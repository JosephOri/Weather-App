import { Box, TextField } from "@mui/material";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";

const CoordinatesInput = () => {
  const { coordinates, setCoordinates } = useWeatherFormContext();

  return (
    <Box className="flex space-x-2 w-full">
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
    </Box>
  );
};

export default CoordinatesInput;
