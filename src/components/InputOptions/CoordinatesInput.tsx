import { Box, TextField } from "@mui/material";
import useWeatherContext from "../../hooks/useWeatherContext";

const CoordinatesInput = () => {
  const { coordinates, setCoordinates } = useWeatherContext();

  return (
    <Box className="flex space-x-2 w-full">
      <TextField
        label="Latitude"
        variant="outlined"
        size="small"
        type="number"
        placeholder="e.g., 37.7749"
        value={coordinates.latitude ?? ""}
        onChange={(e) =>
          setCoordinates({
            latitude: parseFloat(e.target.value),
            longitude: coordinates.longitude,
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
        value={coordinates.longitude ?? ""}
        onChange={(e) =>
          setCoordinates({
            latitude: coordinates.latitude,
            longitude: parseFloat(e.target.value),
          })
        }
        fullWidth
      />
    </Box>
  );
};

export default CoordinatesInput;
