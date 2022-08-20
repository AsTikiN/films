import { CardActionArea } from "@mui/material";
import { FC } from "react";
import { SimilarItem } from "../../types/IFilm";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import Link from "next/link";

interface SimilarFilmItemProps {
  film: SimilarItem;
  isMoving: boolean;
}

const StyledCard = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    color: theme.palette.textColor.main,
    borderRadius: "15px",
    padding: "0",
    width: "130px",
    marginBottom: "10px",
  },
}));

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  "&.MuiCardActionArea-root": {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "stretch",
    height: "170px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  height: "100%",
  width: "130px",
  objectFit: "cover",
}));

const SimilarFilmItem: FC<SimilarFilmItemProps> = ({ film, isMoving }) => {
  const { filmId, posterUrlPreview } = film;

  console.log(isMoving);

  const handleCheckIsMoving = (e: any) => {
    if (isMoving) {
      e.preventDefault();
    }
  };

  return (
    <>
      <StyledCard>
        <StyledCardActionArea draggable={false}>
          <Link href={`/film/${filmId}`}>
            <a onClick={handleCheckIsMoving} draggable={false}>
              <StyledImg draggable={false} src={posterUrlPreview} />
            </a>
          </Link>
        </StyledCardActionArea>
      </StyledCard>
    </>
  );
};

export default SimilarFilmItem;
