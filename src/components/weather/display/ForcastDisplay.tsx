import { Box, Typography } from "@mui/material";
import ForcastCard from "./ForcastCard";
import { ForecastResponse } from "@/types/ForecastResponse";
import { useWeatherData } from "@/hooks/context/useWeatherData";

const ForcastDisplay = () => {
  const { data } = useWeatherData();
  const forecastData = data as ForecastResponse;
  return (
    <Box className="w-full">
      <Box className="mb-10">
        <Typography variant="h5" className="text-center font-semibold">
          {forecastData.city.name}, {forecastData.city.country} -{" "}
          {forecastData.list.length}-Day Forecast
        </Typography>
      </Box>
      <Box className="flex flex-wrap justify-center gap-1">
        {forecastData.list.map((interval, index) => (
          <ForcastCard interval={interval} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default ForcastDisplay;
