import React from "react";
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

const Simple = ({ deviceType }: any) => {
  const router = useRouter();
  // @ts-ignore
  const { data } = useGetSimilarFilmsQuery(parseInt(router.query.id || "0"));
  console.log();
  console.log(data);

  const CarouselWrapper = styled("div")({
    position: "absolute",
    overflow: "hidden",
    height: "100%",
    maxHeight: "50px",
    bottom: "30px",
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
    "& li:nth-last-child(1)": {
      width: "130px!important",
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
      color: "white",
      width: "50px",
      height: "50px",
    },
  });

  return (
    <>
      {data && data.total > 0 && (
        <CarouselWrapper>
          <SvgWrapper>
            <RiArrowUpSLine />
          </SvgWrapper>
          <StyledCarousel
            deviceType={deviceType}
            responsive={responsive}
            slidesToSlide={4}
            arrows={true}
            showDots={false}
            centerMode
          >
            {data.items.map((film, index) => {
              return <SimilarFilmItem key={index} film={film} />;
            })}
          </StyledCarousel>
        </CarouselWrapper>
      )}
    </>
  );
};

export default Simple;
