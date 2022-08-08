import React from "react";
import {CircularProgress, Box} from '@mui/material';

interface Props {
  size?: number;
  color?: "primary" | "inherit" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
}

const Loader = ({size = 35, color="primary"}: Props) => (
  <Box>
    <CircularProgress size={size} color={color}/>
  </Box>
)

export default Loader;