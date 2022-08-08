import React, { useEffect, useState } from "react";
import MainLayout from "../../MainLayout";
import { useRouter } from "next/router";
import { useGetFilmQuery } from "../../store/filmsApi/filmsApi";
import { GetServerSideProps } from "next";
import { Container, styled } from "@mui/system";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Film } from "../../types/Film";
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton";
import { BsBookmark, BsBookmarkFill, BsStar, BsStarFill } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../../components/UI/Loaders/Loader";

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

  const { addSavedFilm, addFavoriteFilm, removeSavedFilm, removeFavoriteFilm } = useActions();
  const savedFilms = useTypedSelector((state) => state.film.savedFilms);
  const favoriteFilms = useTypedSelector((state) => state.film.favoriteFilms);

  // @ts-ignore
  const { data } = useGetFilmQuery(parseInt(router.query.id));

  const [isSaved, setIsSaved] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleSavedFilm = () => {
    const filmId = data?.kinopoiskId;
    if (!filmId) return;

    if (!savedFilms.includes(filmId)) {
      addSavedFilm(filmId);
    } else {
      removeSavedFilm(filmId);
    }
  };

  const handleToggleFavoriteFilm = () => {
    const filmId = data?.kinopoiskId;
    if (!filmId) return;

    if (!favoriteFilms.includes(filmId)) {
      addFavoriteFilm(filmId);
    } else {
      removeFavoriteFilm(filmId);
    }
  };

  useEffect(() => {
    if (data) {
      setIsSaved(savedFilms.includes(data.kinopoiskId));
      localStorage.setItem("savedFilms", JSON.stringify(savedFilms));
    }
  }, [savedFilms]);

  useEffect(() => {
    if (data) {
      setIsFavorite(favoriteFilms.includes(data.kinopoiskId));
      localStorage.setItem("favoriteFilms", JSON.stringify(savedFilms));
    }
  }, [favoriteFilms]);

  useEffect(() => {
    console.log(data?.genres);
  }, [data?.genres])

  return (
    <MainLayout>
      <Wrapper>
        {data ? (
          <Container maxWidth={"lg"}>
            <ContentWrapper direction="column" justifyContent="center" alignItems="flex-start" spacing={"35px"}>
              <Title>{data.nameRu}</Title>
              <Genres>{normalizeGenres(data.genres)}</Genres>
              <Description>{data.description}</Description>
              <Stack direction={"row"} spacing={"10px"}>
                <h1></h1>
                <PrimaryButton size={"medium"} color={"gradient"}>
                  Смотреть
                </PrimaryButton>
                <PrimaryButton onClick={handleToggleSavedFilm} size={"small"}>
                  {isSaved ? <BsBookmarkFill /> : <BsBookmark />}
                </PrimaryButton>
                <PrimaryButton onClick={handleToggleFavoriteFilm} size={"small"}>
                  {isFavorite ? <BsStarFill /> : <BsStar />}
                </PrimaryButton>
              </Stack>
            </ContentWrapper>
          </Container>
        ) : <Loader size={100} color="secondary"/>}
      </Wrapper>
    </MainLayout>
  );
};

export default CurrentFilm;
