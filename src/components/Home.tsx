import React, { FC } from "react";
import { Container, display, styled } from "@mui/system";
import Navbar from "./Navbar";

const Thor = styled("div")({
  height: "650px",
  width: "100%",
  backgroundImage: "url(https://images3.alphacoders.com/124/1241167.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(0,0,0,0.6)",
  backgroundBlendMode: "multiply",
});

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Thor>
        <Container maxWidth="lg">
          <h1 style={{ color: "white" }}>123</h1>
        </Container>
      </Thor>
    </>
  );
};

export default Home;
