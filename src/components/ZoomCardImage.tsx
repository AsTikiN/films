import { styled } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";

interface Props {
  url: string | undefined;
}

const Wrapper = styled("figure")({
  width: "140px",
  height: "210px",
  backgroundPosition: "50% 50%",
  backgroundSize: "150%",
  position: "relative",
  overflow: "hidden",
  borderRadius: "15px",
})

const StyledCardMedia = styled(CardMedia)({
  "&.MuiCardMedia-root": {
    transition: "opacity 0.5s",
    display: "block",
    width: "100%",
    height: "100%",

    "&:hover": {
      opacity: "0",
    }
  },
});

const ZoomCardImage = ({url}: Props) => {
  const handleImageMove = (e: React.MouseEvent<HTMLDivElement>) => {

    let zoomer = e.currentTarget;
    let offsetX = 0;
    let offsetY = 0;

    offsetX = e.nativeEvent.offsetX;
    offsetY = e.nativeEvent.offsetY;
    
    const x = offsetX/zoomer.offsetWidth*100
    const y = offsetY/zoomer.offsetHeight*100

    zoomer.style.backgroundPosition = `${x}% ${y}%`;
  }

 return (
  <Wrapper onMouseMove={handleImageMove} style={{backgroundImage: `url("${url}")`}}>
    <StyledCardMedia image={url}/>
  </Wrapper>
 ) 
}

export default ZoomCardImage;