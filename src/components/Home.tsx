import React, { FC, useEffect } from "react";
import { Container, display, styled } from "@mui/system";
import Navbar from "./Navbar";
import { useGetFilmQuery, useGetTopPopularFilmsQuery } from "../store/filmsApi/filmsApi";
import FilmCard from "./FilmCard";
import RatingProgress from "./UI/RatingProgress";
import { Stack } from "@mui/material";
import theme from "../../theme";
import Loader from "./UI/Loader";

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

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

const FilmList = styled("div")({
  background: theme.palette.bgColor.main,
});

const Home: FC = () => {
  // const { data, isLoading, isFetching, isError } = useGetFilmQuery(301);
  const { data, isLoading, isFetching, isError, isSuccess } = useGetTopPopularFilmsQuery(1);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <Navbar />
      <Thor>
        <Container maxWidth="lg">
          <h1 style={{ color: "white" }}>123</h1>
        </Container>
      </Thor>
      <FilmList>
        <Container maxWidth="lg">
          <StyledStack>
            {/* {isSuccess ? data.films.map((film) => <FilmCard key={film.filmId} film={film} />) : ""} */}
            {data && data.films.map((film) => <FilmCard key={film.filmId} film={film} />)}
            {isLoading && <Loader />}
          </StyledStack>
        </Container>
      </FilmList>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
