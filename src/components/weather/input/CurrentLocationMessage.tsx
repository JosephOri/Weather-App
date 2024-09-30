import { Typography } from "@mui/material";
import SearchButton from "./SearchButton";
import useWeatherForm from "@/hooks/context/useWeatherForm";
import { Coordinates } from "@/types/Coordinates";
import { getCurrentLocation } from "@/utils/getCurrentLocation";
import { toast } from "react-toastify";

const CurrentLocationMessage = () => {
  const { setCoordinates } = useWeatherForm();
  const onLocationSearch = async () => {
    try {
      const currentCoords: Coordinates = await getCurrentLocation();
      setCoordinates(currentCoords);
      return true;
    } catch (error) {
      toast.error("Unable to retrieve current location.");
      return false;
    }
  };
  return (
    <>
      <Typography className="text-gray-600">
        The application will use your current location
      </Typography>
      <SearchButton validateSearch={onLocationSearch} />
    </>
  );
};

export default CurrentLocationMessage;
