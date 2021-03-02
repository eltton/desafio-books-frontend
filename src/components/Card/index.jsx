import React, { useState } from "react";
import api from "../../services/api";
import Modal from "../../components/Modal";
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
  const [modalVisible, setmodalVisible] = useState(false);
  const [bookData, setBookData] = useState({ data: [] });

  const getBook = async (bookID) => {
    setmodalVisible(true);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("books/" + bookID, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      setBookData(data);
    } catch (error) {}
  };

  return (
    <>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          onClose={() => setmodalVisible(false)}
          data={bookData}
        ></Modal>
      )}

      <Card key={props.bookID} onClick={() => getBook(props.bookID)}>
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
    </>
  );
}

export default Cards;
