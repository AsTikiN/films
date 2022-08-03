import Box from "@mui/material/Box";
import { LinearProgress, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface RatingProgressProps {
  rating: string;
  ratingVoteCount: number;
}

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledLinearProgress = styled(LinearProgress)({
  "&.MuiLinearProgress-determinate": {
    backgroundColor: "#3C4A64",
    height: "9px",
  },
  "&.MuiLinearProgress-root": {
    width: "100%",
    borderRadius: "15px",
  },
  //полоса загрузки
  "& .MuiLinearProgress-bar": {
    borderRadius: "15px",
  },
});

const RatingProgress: FC<RatingProgressProps> = ({ rating, ratingVoteCount }) => {
  //не все рейтинги приходят в виде "9.9" иногда приходят в процентах,
  // поэтому такое отлавливаю и привожу в нормальный вид + округляю до одного знака после запятой
  const normalizedRating = rating && rating.includes("%") ? Math.floor(+rating.slice(0, -1)) / 10 : +rating;

  const ratingColor =
    normalizedRating >= 8 ? "goodFilmRating" : normalizedRating >= 5 ? "normalFilmRating" : "badFilmRating";
  return (
    <Box
      sx={{
        padding: "0px",
      }}
      alignItems="center"
      p={3}
    >
      <StyledBox>
        <Box minWidth={35}>{ratingVoteCount} Голосов</Box>
        <Box>{normalizedRating}/10</Box>
      </StyledBox>
      <StyledLinearProgress color={ratingColor} variant="determinate" value={+normalizedRating * 10} />
    </Box>
  );
};

export default RatingProgress;
