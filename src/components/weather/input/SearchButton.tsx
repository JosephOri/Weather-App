import { Button, Box } from "@mui/material";
import { useWeatherData } from "@/hooks/context/useWeatherData";

interface SearchButtonProps {
  validateSearch: () => Promise<boolean>;
}

const SearchButton = ({ validateSearch }: SearchButtonProps) => {
  const { refetch } = useWeatherData();
  const handleClick = async () => {
    const isValid = await validateSearch();
    if (isValid) {
      refetch();
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
