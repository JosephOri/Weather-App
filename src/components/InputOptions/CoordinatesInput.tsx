import { Box, TextField, Button } from "@mui/material";
import useWeatherContext from "../../hooks/useWeatherContext";

const CoordinatesInput = () => {
  const { coordinates, setCoordinates } = useWeatherContext();

  return (
    <Box className="mt-4">
      <Box className="flex space-x-4">
        <Box className="w-1/2">
          <TextField
            label="Latitude"
            variant="outlined"
            fullWidth
            type="number"
            placeholder="e.g., 37.7749"
            value={coordinates.latitude}
            onChange={(e) =>
              setCoordinates({
                latitude: parseFloat(e.target.value),
                longitude: coordinates.longitude,
              })
            }
          />
        </Box>
        <Box className="w-1/2">
          <TextField
            label="Longitude"
            variant="outlined"
            fullWidth
            type="number"
            placeholder="e.g., -122.4194"
            value={coordinates.longitude}
            onChange={(e) =>
              setCoordinates({
                latitude: coordinates.latitude,
                longitude: parseFloat(e.target.value),
              })
            }
          />
        </Box>
      </Box>
      <Box className="mt-4">
        <Button variant="contained" color="primary" fullWidth>
          Get Weather
        </Button>
      </Box>
    </Box>
  );
};

export default CoordinatesInput;
