import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <Box className="flex flex-col items-center justify-center mt-8">
      <CircularProgress size={60} className="text-blue-500" />
      {message && (
        <Typography variant="h6" className="mt-4 text-center text-gray-700">
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
