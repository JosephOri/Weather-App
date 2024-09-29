import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface Props {
  message: string;
  onRetry?: () => void;
}

const Error = ({ message, onRetry }: Props) => {
  return (
    <Box className="flex flex-col items-center justify-center mt-8">
      <ErrorOutlineIcon className="text-red-500" style={{ fontSize: 80 }} />
      <Typography variant="h6" className="mt-4 text-center text-red-600">
        {message}
      </Typography>
      {onRetry && (
        <Button
          variant="contained"
          color="primary"
          className="mt-6"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </Box>
  );
};

export default Error;
