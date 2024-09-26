import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import WeatherInputForm from "../components/WeatherInputForm";
import { useWeatherData } from "../hooks/useWeatherData";
import useWeatherFormContext from "../hooks/useWeatherFromContext";
import WeatherDisplay from "../components/WeatherDisplay ";
import { getCurrentLocation } from "../utils/getCurrentLocation";
import { Coordinates } from "../types/Coordinates";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { inputMethod, cityName, coordinates, setCoordinates } =
    useWeatherFormContext();

  const { data: weatherData, isLoading, isError, refetch } = useWeatherData();

  const handleSearch = async () => {
    if (inputMethod === "cityName" && !cityName.trim()) {
      toast.error("Please enter a city name.");
      return;
    }

    if (inputMethod === "coordinates") {
      if (coordinates.lat === undefined || coordinates.long === undefined) {
        toast.error("Please enter valid coordinates.");
        return;
      }
    }

    if (inputMethod === "currentLocation") {
      try {
        const currentCoords: Coordinates = await getCurrentLocation();
        setCoordinates(currentCoords);
      } catch (error) {
        toast.error("Unable to retrieve current location.");
        return;
      }
    }

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
