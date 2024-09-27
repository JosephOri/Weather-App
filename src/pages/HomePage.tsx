import { useEffect } from "react";
import { Box } from "@mui/material";
import WeatherInputForm from "../components/WeatherInputForm";
import { useWeatherData } from "../hooks/useWeatherData";
import WeatherDisplay from "../components/WeatherDisplay ";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWeatherFormContext from "../hooks/useWeatherFromContext";

const HomePage = () => {
  const { shouldFetch, setShouldFetch } = useWeatherFormContext();

  const { data: weatherData, isLoading, isError, refetch } = useWeatherData();

  useEffect(() => {
    if (shouldFetch) {
      refetch();
      setShouldFetch(false);
    }
  }, [shouldFetch, setShouldFetch, refetch]);

  return (
    <Box className="flex flex-col">
      <WeatherInputForm />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching weather data.</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      <ToastContainer />
    </Box>
  );
};

export default HomePage;
