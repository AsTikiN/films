import React, { FC } from "react";
import { Container, styled } from "@mui/system";
import FilmList from "./FilmList";
import MainLayout from "../MainLayout";

const Thor = styled("div")({
  height: "calc(100vh - 102px)",
  width: "100%",
  backgroundImage: "url(https://images3.alphacoders.com/124/1241167.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(0,0,0,0.6)",
  backgroundBlendMode: "multiply",
  backgroundPosition: "center center",
});

const Home: FC = () => {
  // const { data, isLoading, isFetching, isError } = useGetFilmQuery(301);
  
  return (
    <MainLayout>
      <Thor>
        <Container maxWidth="lg">
          <h1 style={{ color: "white" }}>123</h1>
        </Container>
      </Thor>
      <FilmList />
    </MainLayout>
  );
};

export default Home;
