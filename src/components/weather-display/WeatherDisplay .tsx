import { Box, Typography } from "@mui/material";
import { WeatherResponse } from "../../types/WeatherResponse";
import { ForecastResponse } from "../../types/ForecastResponse";
import useWeatherForm from "../../hooks/context/useWeatherForm";
import WeatherCard from "./ForcastCard";
import CurrentWeather from "./CurrentWeather";

interface Props {
  weatherData: WeatherResponse | ForecastResponse;
}

const WeatherDisplay = ({ weatherData }: Props) => {
  const { forecastDuration } = useWeatherForm();

  return (
    <Box className="mt-4 flex justify-center">
      {forecastDuration === "current" ? (
        <CurrentWeather weatherData={weatherData as WeatherResponse} />
      ) : (
        renderForecast(weatherData as ForecastResponse)
      )}
    </Box>
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
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {data.list.map((day, index) => (
          <WeatherCard day={day} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default WeatherDisplay;
