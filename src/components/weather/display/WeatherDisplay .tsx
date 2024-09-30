import { Box } from "@mui/material";
import useWeatherForm from "../../../hooks/context/useWeatherForm";
import CurrentWeather from "./CurrentWeather";
import ForcastDisplay from "./ForcastDisplay";

const WeatherDisplay = () => {
  const { forecastDuration } = useWeatherForm();

  return (
    <Box className="mt-10 flex flex-wrap md:justify-center">
      {forecastDuration === "current" ? <CurrentWeather /> : <ForcastDisplay />}
    </Box>
  );
};

export default WeatherDisplay;
