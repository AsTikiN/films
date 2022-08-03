import { Button } from "@mui/material";
import React from "react";
import Link from "next/link";
import theme from "../../../../theme";
// rework
const CatalogButton = () => {
  return (
    <Button
      sx={{
        fontSize: "17px",
        border: "none",
      }}
    >
      Каталог
    </Button>
  );
};

export default CatalogButton;
