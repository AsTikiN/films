import React, { useEffect, useState } from "react";
import MainLayout from "../../MainLayout";
import { useRouter } from "next/router";
import { useGetFilmQuery } from "../../store/filmsApi/filmsApi";
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from "next";
import { Container, styled } from "@mui/system";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Film } from "../../types/Film";
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton";
import { BsBookmark, BsBookmarkFill, BsStar, BsStarFill } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../../components/UI/Loaders/Loader";
import FilmInteractions from "./FilmInteractions";

const Wrapper = styled("div")({
  height: "calc(100vh - 102px)",
  width: "100%",
  background: "url(https://i.im.ge/2022/08/06/FgYHVr.image-2022-08-06-14-42-20.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(0,0,0,0.6)",
  backgroundBlendMode: "multiply",
  backgroundPosition: "center center",
  color: "white",
  padding: "0px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ContentWrapper = styled(Stack)({
  width: "55%",
});

const Title = styled("div")({
  fontWeight: "bold",
  fontSize: "65px",
  fontFamily: "Lato, sans-serif",
});

const Genres = styled("div")({
  fontSize: "25px",
});

const Description = styled("div")({
  fontSize: "18px",
});

const normalizeGenres = (genres: any[]) => {
  let normalizedGenres = "";

  genres.forEach((elem, index) => {
    normalizedGenres += elem.genre[0].toUpperCase() + elem.genre.slice(1);

    if (index + 1 < genres.length) {
      normalizedGenres += " / ";
    }
  });

  return normalizedGenres;
};

const CurrentFilm = () => {
  const router = useRouter();
  const queryId = router.query.id;

  // @ts-ignore
  const { data } = useGetFilmQuery(parseInt(router.query.id || "0"));

  return (
    <MainLayout>
      <Wrapper>
        {data ? (
          <Container maxWidth={"lg"}>
            <ContentWrapper direction="column" justifyContent="center" alignItems="flex-start" spacing={"35px"}>
              <Title>{data.nameRu}</Title>
              <Genres>{normalizeGenres(data.genres)}</Genres>
              <Description>{data.description}</Description>
              <FilmInteractions kinopoiskId={data.kinopoiskId} />
            </ContentWrapper>
          </Container>
        ) : (
          <Loader size={100} color="secondary" />
        )}
      </Wrapper>
    </MainLayout>
  );
};

export default CurrentFilm;
