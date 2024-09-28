import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { WeatherResponse } from "../types/WeatherResponse";
import { ForecastResponse } from "../types/ForecastResponse";
import useWeatherFormContext from "../hooks/useWeatherFormContext";
interface WeatherDisplayProps {
  weatherData: WeatherResponse | ForecastResponse;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  const { forecastDuration } = useWeatherFormContext();

  return (
    <Box className="mt-4 flex justify-center">
      {forecastDuration === "current"
        ? renderCurrentWeather(weatherData as WeatherResponse)
        : renderForecast(weatherData as ForecastResponse)}
    </Box>
  );
};

const renderCurrentWeather = (weatherData: WeatherResponse) => {
  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardContent>
        <Typography variant="h5" className="text-center font-semibold mb-4">
          Weather in {weatherData.name}, {weatherData.sys.country}
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6} className="flex flex-col">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-20 h-20"
            />
            <Typography variant="h4" className="font-bold">
              {Math.round(weatherData.main.temp)}°C
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className="mb-2">
              <strong>Humidity:</strong> {weatherData.main.humidity}%
            </Typography>
            <Typography variant="body1" className="mb-2">
              <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
            </Typography>
            <Typography variant="body1" className="capitalize">
              <strong>Conditions:</strong> {weatherData.weather[0].description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const renderForecast = (data: ForecastResponse) => {
  return (
    <Box className="w-full">
      <Box className="mb-10">
        <Typography variant="h5" className="text-center font-semibold">
          {data.city.name}, {data.city.country} - {data.list.length}-Day
          Forecast
        </Typography>
      </Box>
      <Grid container spacing={4} className="justify-center">
        {data.list.map((day, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Card className="shadow-md">
              <CardContent className="flex flex-col items-center">
                <Typography variant="h6">
                  {new Date(day.dt * 1000).toLocaleDateString()}
                </Typography>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                  className="w-16 h-16"
                />
                <Typography variant="body1" className="capitalize">
                  {day.weather[0].description}
                </Typography>
                <Typography variant="h6">
                  {Math.round(day.main.temp)}°C
                </Typography>
                <Typography variant="body2">
                  Min: {Math.round(day.main.temp_min)}°C / Max:{" "}
                  {Math.round(day.main.temp_max)}°C
                </Typography>
                <Typography variant="body2">
                  Humidity: {day.main.humidity}%
                </Typography>
                <Typography variant="body2">
                  Wind Speed: {day.wind.speed} m/s
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherDisplay;
