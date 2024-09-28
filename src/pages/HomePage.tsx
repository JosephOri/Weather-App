import { useEffect } from "react";
import WeatherInputForm from "../components/WeatherInputForm";
import { useWeatherData } from "../hooks/useWeatherData";
import WeatherDisplay from "../components/WeatherDisplay ";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWeatherFormContext from "../hooks/useWeatherFromContext";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";

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
    <>
      <WeatherInputForm />
      {isLoading && <Loading message="Fetching weather data..." />}
      {isError && <Error message="Unable to fetch weather data." />}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      <ToastContainer />
    </>
  );
};

export default HomePage;
