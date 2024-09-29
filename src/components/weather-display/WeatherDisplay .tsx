import { Box } from "@mui/material";
import { WeatherResponse } from "../../types/WeatherResponse";
import { ForecastResponse } from "../../types/ForecastResponse";
import useWeatherForm from "../../hooks/context/useWeatherForm";
import CurrentWeather from "./CurrentWeather";
import ForcastDisplay from "./ForcastDisplay";

interface Props {
  weatherData: WeatherResponse | ForecastResponse;
}

const WeatherDisplay = ({ weatherData }: Props) => {
  const { forecastDuration } = useWeatherForm();

  return (
    <Box className="mt-4 flex justify-center">
      {forecastDuration === "current" ? (
        <CurrentWeather data={weatherData as WeatherResponse} />
      ) : (
        <ForcastDisplay data={weatherData as ForecastResponse} />
      )}
    </Box>
  );
};

export default WeatherDisplay;
