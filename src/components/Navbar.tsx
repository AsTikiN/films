import { AppBar, Stack } from "@mui/material";
import MySwitch from "./UI/Switcher";
import MySearchInput from "./UI/Search";
import PrimaryButton from "./UI/Buttons/PrimaryButton";
import React, { forwardRef } from "react";
import { Container, styled } from "@mui/system";
import Link from "next/link";
import MainLayout from "../MainLayout";
import Burger from "./UI/Burger";

const NavbarWrapper = styled("div")(({ theme }) => ({
  height: "102px",
  width: "100%",
  background: theme.palette.navBar.main,
  color: theme.palette.textColor.main,
  display: "flex",
  alignItems: "center",
}));

const NavbarContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Logo = styled("img")(({ theme }) => ({
  width: "60px",
  height: "45px",
  borderRadius: "20px",
  cursor: "pointer",
}));

const AppBarWrapper = styled("div")({
  marginBottom: "102px",
});

const Navbar = () => {
  return (
    <AppBarWrapper>
      <AppBar>
        <NavbarWrapper>
          <Container maxWidth="lg">
            <NavbarContent>
              <Link href={"/"}>
                <a>
                  <Logo
                    src={
                      "data:image/png;base64,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"
                    }
                  />
                </a>
              </Link>
              <StyledStack spacing={"46px"} direction={"row"} sx={{ alignItems: "center" }}>
                {/*<MySwitch />*/}
                <Burger />
                <MySearchInput placeholder="Search orders..." />
                <Link href={"/catalog"}>
                  <a>
                    <PrimaryButton size={"medium"}>Каталог</PrimaryButton>
                  </a>
                </Link>
                <PrimaryButton size={"large"} color={"gradient"}>
                  Вход
                </PrimaryButton>
              </StyledStack>
            </NavbarContent>
          </Container>
        </NavbarWrapper>
      </AppBar>
    </AppBarWrapper>
  );
};

export default Navbar;
