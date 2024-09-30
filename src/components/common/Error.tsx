import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface Props {
  message: string;
  onRetry?: () => void;
}

const Error = ({ message, onRetry }: Props) => {
  return (
    <Box className="flex flex-col items-center justify-center gap-2 mt-10">
      <ErrorOutlineIcon className="text-red-500" style={{ fontSize: 80 }} />
      <Typography variant="h6" className="text-center text-red-600">
        {message}
      </Typography>
      {onRetry && (
        <Button
          variant="contained"
          color="primary"
          className="mt"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </Box>
  );
};

export default Error;
