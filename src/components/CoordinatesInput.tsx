import { Box, Grid, TextField } from "@mui/material";
import useWeatherContext from "../hooks/useWeatherContext";

const CoordinatesInput = () => {
  const { latitude, setLatitude, longitude, setLongitude } =
    useWeatherContext();

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
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Longitude"
            variant="outlined"
            fullWidth
            type="number"
            placeholder="e.g., -122.4194"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoordinatesInput;
