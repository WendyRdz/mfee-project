import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

 const comment = {
   _id: "1234",
   author: "Wendy Rdz",
   content: "Texto de ejemplo para el comentario",
   createdAt: "2026-01-01",
   updatedAt: "2026-01-01",
   __v: "0",
}; // ACT 1 - Fill all the properties with random data

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{comment.author}</Author>
        <Typography>{comment.content}</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;
