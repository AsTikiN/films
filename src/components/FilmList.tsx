import { Container, styled } from "@mui/system";
import FilmCard from "./FilmCard";
import React, { useRef, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import theme from "../../theme";
import { useGetTopPopularFilmsQuery } from "../store/filmsApi/filmsApi";

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
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
  paddingBottom: "50px",
});
const FilmList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, isError, isSuccess } = useGetTopPopularFilmsQuery(currentPage);

  const FilmListTopRef = useRef<null | HTMLDivElement>(null);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    FilmListTopRef.current && FilmListTopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (data) {
    console.log(data.films);
  }

  return (
    <>
      {data && (
        <FilmListWrapper ref={FilmListTopRef}>
          <Container maxWidth="lg">
            <StyledStack>
              {data.films.map((film) => (
                <FilmCard key={film.filmId} film={film} />
              ))}
            </StyledStack>
            <StyledPagination
              color={"primary"}
              page={currentPage}
              onChange={handleChangePage}
              variant={"outlined"}
              count={data.pagesCount}
            />
          </Container>
        </FilmListWrapper>
      )}
    </>
  );
};

export default FilmList;
