import { Box, Typography } from "@mui/material";
import { useThemeMode } from "../hooks/context/useThemeModeContexs";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useThemeMode();
  return (
    <Box className="flex justify-between items-center h-20">
      <Typography variant="h4" className="text-xl">
        Weather App
      </Typography>
      <DarkModeToggle
        checked={isDarkMode}
        onChange={() => setIsDarkMode((prevMode) => !prevMode)}
      />
    </Box>
  );
};

export default Header;
