import { Button, Box } from "@mui/material";
import useWeatherForm from "../../hooks/context/useWeatherForm";

interface SearchButtonProps {
  validateSearch: () => Promise<boolean>;
}

const SearchButton = ({ validateSearch }: SearchButtonProps) => {
  const { setShouldFetch } = useWeatherForm();
  const handleClick = async () => {
    const isValid = await validateSearch();
    if (isValid) {
      setShouldFetch(true);
    }
  };
  return (
    <Box className="flex-grow items-center">
      <Button variant="contained" color="primary" onClick={handleClick}>
        search
      </Button>
    </Box>
  );
};

export default SearchButton;
