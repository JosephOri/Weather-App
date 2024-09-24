import { Box } from "@mui/material";
import WeatherInputForm from "../../components/WeatherInputForm";
import { WeatherProvider } from "../../context/WeatherContext";

const HomePage = () => {
  return (
    <WeatherProvider>
      <Box className="flex justify-center">
        <WeatherInputForm />
      </Box>
    </WeatherProvider>
  );
};

export default HomePage;
