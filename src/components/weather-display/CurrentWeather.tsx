import { WeatherResponse } from "../../types/WeatherResponse";
import { Box, Paper, Typography } from "@mui/material";

interface CurrentWeatherProps {
  weatherData: WeatherResponse;
}

const CurrentWeather = ({ weatherData }: CurrentWeatherProps) => {
  return (
    <Paper elevation={2} className="md:p-6 md:px-8 opacity-90">
      <Box
        id="weather-container"
        className="flex flex-wrap justify-center rounded-xl md:justify-start py-5 md:py-0"
      >
        <Box
          id="weather-status"
          className="flex flex-col md:m-8 md:mx-6 md:w-[25rem]"
        >
          <Typography
            variant="h4"
            className="font-semibold text-[1.25rem] text-[#396bae] mb-8"
          >
            {weatherData.name}
          </Typography>
          <Box className="flex">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className=" sm:opacity-0 md:opacity-100"
            />
            <span className="font-light text-[7rem] text-[#4a6fa1] ml-6 leading-none">
              <Typography variant="h3">
                {Math.round(weatherData.main.temp)}°C
              </Typography>
            </span>
          </Box>
          <Typography variant="h6">
            {weatherData.weather[0].description}
          </Typography>
        </Box>

        <Box
          id={"weather-info"}
          className="flex flex-col m-8 mx-4 ml-8 md:my-10"
        >
          <Box className="text-[1.25rem] text-[#4a6fa1]">
            <Typography className="text-[1.25rem] text-[#4a6fa1] md:py-1">
              <strong>Humidity:</strong> {weatherData.main.humidity}%
            </Typography>
            <Typography className="text-[1.25rem] text-[#4a6fa1] md:py-1">
              <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
            </Typography>
            <Typography className="text-[1.25rem] text-[#4a6fa1] md:py-1">
              <strong>Conditions:</strong> {weatherData.weather[0].description}
            </Typography>
          </Box>
          <Box id="high-low-container" className="flex mb-8 w-[2rem]"></Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CurrentWeather;
