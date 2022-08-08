import React, { FC } from "react";
import { Container, styled } from "@mui/system";
import FilmList from "./FilmList";
import MainLayout from "../MainLayout";

const Banner = styled("div")({
  minHeight: "470px",
  borderRadius: "30px",
  width: "95%",
  margin: "0 auto",
  backgroundImage: "url(https://images3.alphacoders.com/124/1241167.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(0,0,0,0.6)",
  backgroundBlendMode: "multiply",
  backgroundPosition: "60% 10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Slogan = styled("h1")({
  maxWidth: "670px",
  textAlign: "center",
})

const Wrapper = styled("div")(({theme}) => ({
  backgroundColor: theme.palette.bgColor.main,
  paddingTop: "50px",
}))

const Home: FC = () => {
  // const { data, isLoading, isFetching, isError } = useGetFilmQuery(301);

  return (
    <MainLayout>
        <Wrapper>
          <Banner>
            <Slogan style={{ color: "white" }}>Лучший сервис для совместного просмотра фильмов</Slogan>
          </Banner>
        </Wrapper>
      <FilmList />
    </MainLayout>
  );
};

export default Home;
