import Navbar from "./components/Navbar";
import { Container, styled } from "@mui/system";
import theme from "../theme";

const StyledFooter = styled("div")({
  height: "160px",
  backgroundColor: theme.palette.navBar.main,
});

const MainLayout = ({ children }: any) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      {children}
      <footer>
        <StyledFooter>
          <Container maxWidth={"lg"}></Container>
        </StyledFooter>
      </footer>
    </>
  );
};

export default MainLayout;
