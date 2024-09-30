import WeatherInputForm from "../components/WeatherInputForm";
import WeatherDisplay from "../components/weather-display/WeatherDisplay ";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Header from "../components/common/Header";
import { useWeatherData } from "../hooks/context/useWeatherData";
import { Box } from "@mui/material";

const HomePage = () => {
  const { isLoading, isError, data: weatherData,refetch } = useWeatherData();


  return (
    <Box className="px-5">
      <Header />
      <WeatherInputForm />
      {isLoading && <Loading message="Fetching weather data..." />}
      {isError && <Error message="Unable to fetch weather data." onRetry={refetch}/>}
      {weatherData && <WeatherDisplay />}
      <ToastContainer />
    </Box>
  );
};

export default HomePage;
