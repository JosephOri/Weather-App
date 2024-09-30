import { Box, Typography } from "@mui/material";
import { useThemeMode } from "@hooks/context/useThemeMode";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();
  return (
    <Box className="flex justify-between items-center h-20">
      <Typography variant="h4" className="text-xl">
        Weather
      </Typography>
      <DarkModeToggle
        checked={isDarkMode}
        onChange={() => setIsDarkMode((prevMode) => !prevMode)}
      />
    </Box>
  );
};

export default Header;
