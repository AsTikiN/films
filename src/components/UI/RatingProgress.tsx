import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import Typography from "@mui/material/Typography";

const RatingProgress = (props: any) => {
  return (
    <Box
      sx={{
        padding: "0px",
      }}
      alignItems="center"
      p={3}
    >
      <Box minWidth={35}>8.9</Box>
      <Box width="100%" mr={3}>
        <LinearProgress
          sx={{
            width: "134px",
          }}
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  );
};

export default RatingProgress;
