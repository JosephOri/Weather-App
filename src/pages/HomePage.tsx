import { Box } from "@mui/material";
import WeatherInputForm from "../components/WeatherInputForm";

const HomePage = () => {
  return (
    <Box className="flex flex-col">
      <WeatherInputForm />
    </Box>
  );
};

export default HomePage;
