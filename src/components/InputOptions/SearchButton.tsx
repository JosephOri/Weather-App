import { Button, Box } from "@mui/material";
import useWeatherFormContext from "../../hooks/useWeatherFromContext";

interface SearchButtonProps {
  onSearch: () => void;
}

const SearchButton = ({ onSearch }: SearchButtonProps) => {
  const { setShouldFetch } = useWeatherFormContext();
  const handleClick = () => {
    onSearch();
    setShouldFetch(true);
  };
  return (
    <Box className="flex-grow">
      <Button variant="contained" color="primary" onClick={handleClick}>
        search
      </Button>
    </Box>
  );
};

export default SearchButton;
