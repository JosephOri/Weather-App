import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../api/weather.api";

export const useWeatherData = (url: string) => {
  return useQuery({
    queryKey: ["weather", url.split("&").slice(0, -1)],
    queryFn: () => getWeatherData(url),
  });
};
