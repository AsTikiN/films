import { useRouter } from "next/router";
import { useGetFilmQuery } from "../../store/filmsApi/filmsApi";
import { Container, styled } from "@mui/system";
import { Stack } from "@mui/material";
import Loader from "../../components/UI/Loaders/Loader";
import FilmInteractions from "./FilmInteractions";
import SimilarFilms from "./SimilarFilms";
import NavLayout from "../../layouts/NavLayout";

const Wrapper = styled("div")({
  height: "calc(100vh - 102px)",
  width: "100%",
  background: "url(https://i.im.ge/2022/08/06/FgYHVr.image-2022-08-06-14-42-20.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(0,0,0,0.7)",
  backgroundBlendMode: "multiply",
  backgroundPosition: "center center",
  color: "white",
  padding: "0px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const ContentWrapper = styled(Stack)({
  width: "55%",
});

const Title = styled("div")({
  fontWeight: "bold",
  fontSize: "65px",
  fontFamily: "Lato, sans-serif",
});
const StyledContainer = styled(Container)({
  marginTop: "-150px",
});

const Genres = styled("div")({
  fontSize: "25px",
});

const Description = styled("div")({
  fontSize: "18px",
});
const StyledImg = styled("img")({
  width: "20%",
  height: "auto",
  borderRadius: "15px",
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
  console.log(data);
  return (
    <>
      <NavLayout>
        <Wrapper>
          {data ? (
            <StyledContainer maxWidth={"lg"}>
              <Stack direction={"row"} spacing={"50px"}>
                <StyledImg src={data.posterUrlPreview} alt={data.nameRu} />
                <ContentWrapper direction="column" justifyContent="center" alignItems="flex-start" spacing={"35px"}>
                  <Title>{data.nameRu}</Title>
                  <Genres>{normalizeGenres(data.genres)}</Genres>
                  <Description>{data.description}</Description>
                  <FilmInteractions kinopoiskId={data.kinopoiskId} />
                </ContentWrapper>
              </Stack>
            </StyledContainer>
          ) : (
            <Loader size={100} color="secondary" />
          )}
        </Wrapper>
      </NavLayout>
      <SimilarFilms />
    </>
  );
};

export default CurrentFilm;
