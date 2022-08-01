import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import RatingProgress from "./UI/RatingProgress";
import React from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    padding: "27px",
    color: "white",
    borderRadius: "15px",
  },
}));
const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  "&.MuiCardActionArea-root": {
    display: "flex",
    flexDirection: "row",
  },
}));
//

const FilmCard = () => {
  return (
    <StyledCard sx={{ maxWidth: 430 }}>
      <StyledCardActionArea>
        <CardMedia
          component="img"
          width="140px"
          height="190"
          image="https://upload.wikimedia.org/wikipedia/ru/9/9d/Matrix-DVD.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <RatingProgress value={20} />
        </CardContent>
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default FilmCard;
