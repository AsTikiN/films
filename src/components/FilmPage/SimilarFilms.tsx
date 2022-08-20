import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/system";
import SimilarFilmItem from "./SimilarFilmItem";
import { useGetSimilarFilmsQuery } from "../../store/filmsApi/filmsApi";
import { useRouter } from "next/router";
import { RiArrowUpSLine } from "react-icons/ri";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1440, min: 1000 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 4,
  },
};
const CarouselWrapper = styled("div")({
  position: "absolute",
  overflow: "hidden",
  height: "100%",
  maxHeight: "50px",
  bottom: "0",
  left: "0",
  width: "100%",
  transition: "all 0.3s ease-in",

  "&:hover": {
    maxHeight: "250px",

    "& .react-multi-carousel-list": {
      transition: "all 0.3s ease-in",
      bottom: "0",
    },

    "& svg": {
      transition: "all 0.3s ease-in",
      bottom: "200px",
      transform: "rotate(180deg)",
    },
  },
});

const StyledCarousel = styled(Carousel)({
  "&.react-multi-carousel-list": {
    transition: "all 0.3s ease-in",
    position: "absolute ",
    bottom: "-300px",
    left: "0",
    width: "100%",
    cursor: "grab",
  },

  "& .react-multi-carousel-track": {
    margin: "0 auto",
  },
});

const SvgWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& svg": {
    transition: "all 0.3s ease-in",
    position: "absolute",
    bottom: "0px",
  },
});

const SimilarFilm = () => {
  const router = useRouter();
  // @ts-ignore
  const { data } = useGetSimilarFilmsQuery(parseInt(router.query.id || "0"));
  const [isMoving, setIsMoving] = useState(false);

  const handleBeforeChange = () => {
    setIsMoving(true);
  };
  const handleAfterChange = () => {
    setIsMoving(false);
  };

  return (
    <>
      {data && data.total > 0 && (
        <CarouselWrapper>
          <SvgWrapper>
            <RiArrowUpSLine size={50} color={"#ffffff"} />
          </SvgWrapper>
          <StyledCarousel
            responsive={responsive}
            slidesToSlide={4}
            arrows={true}
            showDots={false}
            centerMode
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {data.items.map((film, index) => {
              return <SimilarFilmItem key={film.filmId} film={film} isMoving={isMoving} />;
            })}
          </StyledCarousel>
        </CarouselWrapper>
      )}
    </>
  );
};

export default SimilarFilm;
