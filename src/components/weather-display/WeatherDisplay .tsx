import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { WeatherResponse } from "../../types/WeatherResponse";
import { ForecastResponse } from "../../types/ForecastResponse";
import useWeatherFormContext from "../../hooks/context/useWeatherFormContext";
import WeatherCard from "./WeatherCard";

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
    <Card className="w-full max-w-sm shadow-lg bg-inherit">
      <CardContent>
        <Typography variant="h5" className="text-center font-semibold mb-4">
          Weather in {weatherData.name}, {weatherData.sys.country}
        </Typography>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-20 h-20"
            />
            <Typography variant="h4" className="font-bold">
              {Math.round(weatherData.main.temp)}°C
            </Typography>
          </div>
          <div>
            <Typography variant="body1" className="mb-2">
              <strong>Humidity:</strong> {weatherData.main.humidity}%
            </Typography>
            <Typography variant="body1" className="mb-2">
              <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
            </Typography>
            <Typography variant="body1" className="capitalize">
              <strong>Conditions:</strong> {weatherData.weather[0].description}
            </Typography>
          </div>
        </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {data.list.map((day, index) => (
          <WeatherCard day={day} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default WeatherDisplay;
