import { Button } from "@mui/material";
import React from "react";
import Link from "next/link";
import theme from "../../../../theme";

const CatalogButton = () => {
  return (
    <Link href={"/catalog"}>
      <Button
        sx={{
          fontSize: "17px",
          border: "none",
        }}
      >
        Каталог
      </Button>
    </Link>
  );
};

export default CatalogButton;
