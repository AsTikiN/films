import React, { FC, useEffect } from "react";
import { Container, display, styled } from "@mui/system";
import Navbar from "./Navbar";
import { useGetFilmQuery, useGetTopPopularFilmsQuery } from "../store/filmsApi/filmsApi";
import FilmCard from "./FilmCard";
import RatingProgress from "./UI/RatingProgress";
import { Pagination, Stack } from "@mui/material";
import theme from "../../theme";
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
