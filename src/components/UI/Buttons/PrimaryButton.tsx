import React, { JSXElementConstructor } from "react";
import { Button, styled } from "@mui/material";

interface PrimaryButtonProps {
  children: JSX.Element | string;
  size?: "small" | "medium" | "large";
}

const PrimaryButton = ({children, size="large"}: PrimaryButtonProps) => {

  const CustomButon = styled(Button)(({theme}) => ({
    background:
    "linear-gradient(90deg, rgba(255,74,76,1) 0%, rgba(255,74,139,1) 100%)",
    border: "none",
    borderRadius: "16px",
    fontSize: "16px",
    padding: "15px 55px",
  }))

  return (
    <CustomButon size={size}>
      {children}
    </CustomButon>
  );
};

export default PrimaryButton;
