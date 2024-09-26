import { Box, Typography } from "@mui/material";
import SearchButton from "./SearchButton";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";
import { Coordinates } from "../../types/Coordinates";
import { getCurrentLocation } from "../../utils/getCurrentLocation";
import { toast } from "react-toastify";

const CurrentLocationMessage = () => {
  const { setCoordinates } = useWeatherFormContext();
  const onLocationSearch = async () => {
    try {
      const currentCoords: Coordinates = await getCurrentLocation();
      setCoordinates(currentCoords);
    } catch (error) {
      toast.error("Unable to retrieve current location.");
      return;
    }
  };
  return (
    <Box className="flex items-center space-x-2">
      <Typography className="text-gray-600">
        The application will use your current location
      </Typography>
      <SearchButton onSearch={onLocationSearch} />
    </Box>
  );
};

export default CurrentLocationMessage;
