import { Button, Box } from "@mui/material";
import useWeatherFormContext from "../../hooks/useWeatherFormContext";

interface SearchButtonProps {
  validateSearch: () => Promise<boolean>;
}

const SearchButton = ({ validateSearch }: SearchButtonProps) => {
  const { setShouldFetch } = useWeatherFormContext();
  const handleClick = async () => {
    const isValid = await validateSearch();
    if (isValid) {
      setShouldFetch(true);
    }
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
