import { Button, CardActionArea, Paper } from "@mui/material";
import { FC } from "react";
import FilmCard from "../FilmCard";
import { SimilarItem } from "../../types/IFilm";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import Link from "next/link";

interface SimilarFilmItemProps {
  film: SimilarItem;
}

const SimilarFilmItem: FC<SimilarFilmItemProps> = ({ film }) => {
  const { filmId, nameEn, nameRu, nameOriginal, posterUrlPreview, posterUrl } = film;

  const StyledCard = styled(Card)(({ theme }) => ({
    "&.MuiCard-root": {
      color: theme.palette.textColor.main,
      borderRadius: "15px",
      padding: "0",
      width: "130px",
    },
  }));

  const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
    "&.MuiCardActionArea-root": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "stretch",
    },
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    height: "170px",
    width: "130px",
    objectFit: "cover",
  }));

  return (
    <>
      <StyledCard draggable={false}>
        <StyledCardActionArea draggable={false}>
          <Link draggable={false} href={`/film/${filmId}`}>
            <a draggable={false}>
              <StyledImg draggable={false} src={posterUrlPreview} />
            </a>
          </Link>
        </StyledCardActionArea>
      </StyledCard>
    </>
  );
};

export default SimilarFilmItem;
