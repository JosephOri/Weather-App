import { Button } from "@mui/material";

interface SearchButtonProps {
  onSearch: () => void;
}

const SearchButton = ({ onSearch }: SearchButtonProps) => {
  return (
    <Button variant="contained" color="primary" onClick={onSearch}>
      search
    </Button>
  );
};

export default SearchButton;
