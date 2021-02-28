import React from "react";
import {
  Card,
  BookImg,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookDetails,
  BookSpan,
  BoxInfo,
} from "./styles";

function Cards(props) {
  return (
    <Card
      key={props.id}
      onClick={() => {
        console.log("onclick");
      }}
    >
      <BookImg src={props.imageUrl} alt={props.id} />

      <BoxInfo>
        <BookInfo>
          <BookTitle>{props.title}</BookTitle>
          <BookAuthor>{props.authors}</BookAuthor>
        </BookInfo>
        <BookDetails>
          <BookSpan>{props.pageCount} páginas</BookSpan>
          <BookSpan>{props.publisher}</BookSpan>
          <BookSpan>Publicado em {props.published}</BookSpan>
        </BookDetails>
      </BoxInfo>
    </Card>
  );
}

export default Cards;
