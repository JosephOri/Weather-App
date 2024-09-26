// src/components/WeatherDisplay.tsx

import React from "react";
import { WeatherResponse } from "../types/WeatherResponse";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

interface WeatherDisplayProps {
  data: WeatherResponse;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  return (
    <Box className="mt-8 flex justify-center">
      <Card className="w-full max-w-sm shadow-lg">
        <CardContent>
          <Typography variant="h5" className="text-center font-semibold mb-4">
            Weather in {data.name}, {data.sys.country}
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6} className="flex flex-col items-center">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                className="w-20 h-20"
              />
              <Typography variant="h4" className="font-bold">
                {Math.round(data.main.temp)}°C
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" className="mb-2">
                <strong>Humidity:</strong> {data.main.humidity}%
              </Typography>
              <Typography variant="body1" className="mb-2">
                <strong>Wind Speed:</strong> {data.wind.speed} m/s
              </Typography>
              <Typography variant="body1" className="capitalize">
                <strong>conditoins:</strong> {data.weather[0].description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherDisplay;
