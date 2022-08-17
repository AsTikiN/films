import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import RatingProgress from "./UI/RatingProgress";
import React, { FC } from "react";
import { FilmInTopFilms, SimilarItem } from "../types/IFilm";
import Link from "next/link";
import ZoomCardImage from "../components/ZoomCardImage";

interface FilmCardProps {
  film: FilmInTopFilms;
}

const StyledCard = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    color: "white",
    borderRadius: "15px",
    padding: "0",
    width: "430px",
  },
}));

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  "&.MuiCardActionArea-root": {
    padding: "27px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "stretch",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  "&.MuiCardContent-root": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
    padding: "0 0 0 16px",
  },
}));

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { nameRu, nameEn, ratingVoteCount, rating, posterUrlPreview, filmId } = film;
  return (
    <Link href={`/film/${filmId}`}>
      <a>
        <StyledCard sx={{ maxWidth: 430 }}>
          <StyledCardActionArea>
            <ZoomCardImage url={posterUrlPreview} />
            <StyledCardContent>
              <div>
                <Typography variant="h6" component="div">
                  {nameRu}
                </Typography>
                <Typography variant="body1" component="div">
                  {nameEn}
                </Typography>
              </div>
              <RatingProgress rating={rating} ratingVoteCount={ratingVoteCount} />
            </StyledCardContent>
          </StyledCardActionArea>
        </StyledCard>
      </a>
    </Link>
  );
};

export default FilmCard;
