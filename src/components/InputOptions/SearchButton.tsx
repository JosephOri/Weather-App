import { Button, Box } from "@mui/material";

interface SearchButtonProps {
  onSearch: () => void;
}

const SearchButton = ({ onSearch }: SearchButtonProps) => {
  return (
    <Box className="flex-grow">
      <Button variant="contained" color="primary" onClick={onSearch}>
        search
      </Button>
    </Box>
  );
};

export default SearchButton;
