import { Card, CardContent, Typography } from "@mui/material";
import { ForecastResponse } from "../../types/ForecastResponse";

interface Props {
  day: ForecastResponse["list"][0];
}

const ForcastCard = ({ day }: Props) => {
  return (
    <Card elevation={3} className="shadow-md bg-inherit">
      <CardContent className="flex flex-col gap-1">
        <Typography variant="h6">
          {new Date(day.dt * 1000).toLocaleDateString()}
        </Typography>
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day.weather[0].description}
          className="w-16 h-16"
        />
        <Typography variant="body1" className="capitalize">
          {day.weather[0].description}
        </Typography>
        <Typography variant="h6">{Math.round(day.main.temp)}°C</Typography>
        <Typography variant="body2">
          Min: {Math.round(day.main.temp_min)}°C / Max:{" "}
          {Math.round(day.main.temp_max)}°C
        </Typography>
        <Typography variant="body2">Humidity: {day.main.humidity}%</Typography>
        <Typography variant="body2">
          Wind Speed: {day.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForcastCard;
