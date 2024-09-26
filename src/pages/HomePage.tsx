import React, { useState } from "react";
import { Box } from "@mui/material";
import WeatherInputForm from "../components/WeatherInputForm";
import { useWeatherData } from "../hooks/useWeatherData";
import useWeatherFormContext from "../hooks/useWeatherFromContext";
import WeatherDisplay from "../components/WeatherDisplay ";
import { getCurrentLocation } from "../utils/getCurrentLocation";

const HomePage = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { inputMethod, cityName, coordinates, setCoordinates } =
    useWeatherFormContext();

  const { data: weatherData, isLoading, isError, refetch } = useWeatherData();

  const handleSearch = async () => {
    if (inputMethod === "cityName" && cityName.trim() === "") {
      alert("Please enter a city name.");
      return;
    }

    if (inputMethod === "coordinates") {
      if (coordinates.lat === undefined || coordinates.long === undefined) {
        alert("Please enter valid coordinates.");
        return;
      }
    }

    if (inputMethod === "currentLocation") {
      try {
        const currentCoords = await getCurrentLocation();
        setCoordinates(currentCoords);
      } catch (error) {
        alert("Unable to retrieve current location.");
        return;
      }
    }

    setShouldFetch(true);
  };

  React.useEffect(() => {
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
      {weatherData && <WeatherDisplay data={weatherData} />}
    </Box>
  );
};

export default HomePage;
