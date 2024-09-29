import { useWeatherQuery } from "../hooks/useWeatherQuery";

const WeatherDataContext = () => {
  const { data, isError, isLoading, refetch } = useWeatherQuery();
  return <div>WeatherDataContext</div>;
};

export default WeatherDataContext;
