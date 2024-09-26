import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import WeatherInputForm from "../components/WeatherInputForm";
import { useWeatherData } from "../hooks/useWeatherData";
import WeatherDisplay from "../components/WeatherDisplay ";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data: weatherData, isLoading, isError, refetch } = useWeatherData();

  const handleSearch = async () => {
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch) {
      refetch();
      setShouldFetch(false);
    }
  }, [shouldFetch, refetch]);

  return (
    <Box className="flex flex-col">
      <WeatherInputForm onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching weather data.</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      <ToastContainer />
    </Box>
  );
};

export default HomePage;
