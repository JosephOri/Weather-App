import { Card, CardContent, Typography } from "@mui/material";
import { ForecastResponse } from "../../../types/ForecastResponse";

interface Props {
  interval: ForecastResponse["list"][0];
}

const ForcastCard = ({ interval }: Props) => {
  return (
    <Card elevation={3} className="shadow-md bg-inherit">
      <CardContent className="flex flex-col gap-1">
        <Typography variant="h6">
          {new Date(interval.dt * 1000).toLocaleDateString()}
        </Typography>
        <img
          src={`https://openweathermap.org/img/wn/${interval.weather[0].icon}@2x.png`}
          alt={interval.weather[0].description}
          className="w-16 h-16"
        />
        <Typography variant="body1" className="capitalize">
          {interval.weather[0].description}
        </Typography>
        <Typography variant="h6">{Math.round(interval.main.temp)}°C</Typography>
        <Typography variant="body2">
          Min: {Math.round(interval.main.temp_min)}°C / Max:{" "}
          {Math.round(interval.main.temp_max)}°C
        </Typography>
        <Typography variant="body2">
          Humidity: {interval.main.humidity}%
        </Typography>
        <Typography variant="body2">
          Wind Speed: {interval.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForcastCard;
