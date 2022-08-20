import React from "react";
import { Container, styled } from "@mui/system";
import theme from "../../theme";

const StyledFooter = styled("div")({
  height: "160px",
  backgroundColor: theme.palette.navBar.main,
});

const Footer = () => {
  return (
    <footer>
      <StyledFooter>
        <Container maxWidth={"lg"}></Container>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
