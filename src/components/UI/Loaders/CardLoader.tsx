import React from "react";
import Skeleton from '@mui/material/Skeleton';
import { styled } from "@mui/system";

const ImageSkeleton = styled(Skeleton)({
  borderRadius: "15px",
})

const TextSkeleton = styled(Skeleton)({
  "&:last-child": {
    marginTop: "75px",
  }
})

const Wrapper = styled("div")({
  width: "430px",
  height: "264px",
  backgroundColor: "#182031 ",
  display: "flex",  
  gap: "10px",
  borderRadius: "15px",
  padding: "27px",
})

const CardLoader = () => (
  <Wrapper>
    <div>
      <ImageSkeleton variant="rectangular" width={140} height={210}/>
    </div>
    <div>
      <TextSkeleton variant="text" width={220} height={40}/>
      <TextSkeleton variant="text" width={220} height={40}/>
      <Skeleton variant="circular" width={40} height={40}/>
      <TextSkeleton variant="text" width={220} height={20}/>
    </div>
  </Wrapper>
)

export default CardLoader;