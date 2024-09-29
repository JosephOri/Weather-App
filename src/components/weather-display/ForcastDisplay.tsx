import { Box, Typography } from "@mui/material";
import WeatherCard from "./ForcastCard";
import { ForecastResponse } from "../../types/ForecastResponse";

interface Props {
  data: ForecastResponse;
}

const ForcastDisplay = ({ data }: Props) => {
  return (
    <Box className="w-full">
      <Box className="mb-10">
        <Typography variant="h5" className="text-center font-semibold">
          {data.city.name}, {data.city.country} - {data.list.length}-Day
          Forecast
        </Typography>
      </Box>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {data.list.map((day, index) => (
          <WeatherCard day={day} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default ForcastDisplay;
