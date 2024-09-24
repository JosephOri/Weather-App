import { Box, Grid, TextField } from "@mui/material";
import useWeatherContext from "../hooks/useWeatherContext";

const CoordinatesInput = () => {
  const { coordinates, setCoordinates } = useWeatherContext();

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoordinatesInput;
