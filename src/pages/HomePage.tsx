import { useEffect } from "react";
import WeatherInputForm from "../components/WeatherInputForm";
import { useWeatherData } from "../hooks/useWeatherData";
import WeatherDisplay from "../components/weather-display/WeatherDisplay ";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWeatherForm from "../hooks/context/useWeatherForm";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Header from "../components/common/Header";
import { Box } from "@mui/material";

const HomePage = () => {
  const { shouldFetch, setShouldFetch } = useWeatherForm();

  const { data: weatherData, isLoading, isError, refetch } = useWeatherData();

  useEffect(() => {
    if (shouldFetch) {
      refetch();
      setShouldFetch(false);
    }
  }, [shouldFetch, setShouldFetch, refetch]);

  return (
    <Box className="px-5">
      <Header />
      <WeatherInputForm />
      {isLoading && <Loading message="Fetching weather data..." />}
      {isError && <Error message="Unable to fetch weather data." />}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      <ToastContainer />
    </Box>
  );
};

export default HomePage;
