import React from "react";
import Banner from "../../Banner/Banner";
import Comments from "../../Comments/Comments";

import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

 const post = {
   image: "https://tse4.mm.bing.net/th/id/OIP.TfpuPM1MhCqQlOrTs8KR1AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
   title: "My Post Title",
   postID: "1234",
   comments: [
     {
       _id: "1234",
       author: "Wendy Rdz",
       content: "Texto de ejemplo para el comentario",
       createdAt: "2026-01-01",
       updatedAt: "2026-01-01",
       __v: "0",
     },
   ],
   description: "Descripción del post",
 }; // ACT 1 - Fill all this properties with random data

function PostPage() {
  return (
    <Container container>
      Post page
      <BannerContainer item>
        <Banner/>
      </BannerContainer>
      <DescriptionContainer item>
        <p>{post.description}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        <Comments/>
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
