import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { BannerContent, BannerTitle, Container } from "./Banner.styles";

const postImage = "https://tse4.mm.bing.net/th/id/OIP.TfpuPM1MhCqQlOrTs8KR1AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
const postTitle = "My Post Title"; //ACT 1 -  Write a title

function Banner() {
  return (
    <Container image={postImage}>
      <BannerContent>
        <Button sx={{ color: "white" }} startIcon={<ArrowBackIosIcon />}>
          View Posts
        </Button>
        <BannerTitle variant="h3">
          {postTitle}
        </BannerTitle>
      </BannerContent>
    </Container>
  );
}

export default Banner;
