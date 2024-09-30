import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import useWeatherForm from "@/hooks/context/useWeatherForm";
import SearchButton from "./SearchButton";

const CoordinatesInput = () => {
  const { coordinates, setCoordinates } = useWeatherForm();
  const onCoordinatesSearch = async () => {
    if (!coordinates.lat || !coordinates.long) {
      toast.error("Please enter both latitude and longitude.");
      return false;
    }
    return true;
  };
  return (
    <>
      <TextField
        label="Latitude"
        variant="outlined"
        size="small"
        type="number"
        placeholder="e.g., 37.7749"
        value={coordinates.lat ?? ""}
        onChange={(e) =>
          setCoordinates({
            lat: parseFloat(e.target.value),
            long: coordinates.long,
          })
        }
        fullWidth
      />
      <TextField
        label="Longitude"
        variant="outlined"
        size="small"
        type="number"
        placeholder="e.g., -122.4194"
        value={coordinates.long ?? ""}
        onChange={(e) =>
          setCoordinates({
            lat: coordinates.lat,
            long: parseFloat(e.target.value),
          })
        }
        fullWidth
      />
      <SearchButton validateSearch={onCoordinatesSearch} />
    </>
  );
};

export default CoordinatesInput;
