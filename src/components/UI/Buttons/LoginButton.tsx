import React from "react";
import { Button } from "@mui/material";

const LoginButton = () => {
  return (
    <Button
      sx={{
        background:
          "linear-gradient(90deg, rgba(255,74,76,1) 0%, rgba(255,74,139,1) 100%)",
        border: "none",
        width: "169px",
        height: "44px",
        borderRadius: "30px",
        fontSize: "17px",
      }}
    >
      Вход
    </Button>
  );
};

export default LoginButton;
