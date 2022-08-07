import { Container, styled } from "@mui/system";
import FilmCard from "./FilmCard";
import React, { useEffect, useRef, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import CardLoader from "./UI/Loaders/CardLoader";
import theme from "../../theme";
import { useGetTopPopularFilmsQuery } from "../store/filmsApi/filmsApi";

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "35px",
});

const StyledPagination = styled(Pagination)({
  "& .MuiPagination-ul": {
    justifyContent: "center",
    marginTop: "30px",
  },

  "& .MuiButtonBase-root": {
    color: "white",
    border: "1px solid #6585A6",
  },

  "& .Mui-selected": {
    color: "#92BBE5",
  },

  "& .MuiPaginationItem-root": {
    color: "white",
  },
});

const FilmListWrapper = styled("div")({
  background: theme.palette.bgColor.main,
  padding: "50px 0",
});

const FilmList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetTopPopularFilmsQuery(currentPage);
  const FilmListTopRef = useRef<null | HTMLDivElement>(null);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    FilmListTopRef.current && FilmListTopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const value = localStorage.getItem("filmPage");

    if (value) {
      setCurrentPage(parseInt(value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("filmPage", JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <>
      <FilmListWrapper ref={FilmListTopRef}>
        <Container maxWidth="lg">
          <StyledStack>
            {data ? (
              <>
                {data.films.map((film) => (
                  <FilmCard key={film.filmId} film={film} />
                ))}
              </>
            ) : (
              new Array(21).fill(0).map((elem, index) => <CardLoader key={index} />)
            )}
          </StyledStack>
          <StyledPagination
            color={"primary"}
            page={currentPage}
            onChange={handleChangePage}
            variant={"outlined"}
            count={data ? data.pagesCount : 10}
          />
        </Container>
      </FilmListWrapper>
    </>
  );
};

export default FilmList;
