import React from "react";
// import Container from "./styles.js";
import {
  Container,
  CloseIconContainer,
  CloseIconField,
  CloseIcon,
  ModalWindow,
  ModalContainer,
  ImageBookContainer,
  BookInfo,
  Title,
  Authors,
  InfoTitle,
  RowContainer,
  SubTitle,
  Info,
  DescriptionContainer,
  Quotes,
  Description,
  Block,
  BlockContainer,
} from "./styles";

function Modal({ visible, onClose, data }) {
  return (
    visible && (
      <Container>
        <CloseIconContainer onClick={onClose}>
          <CloseIconField>
            <CloseIcon />
          </CloseIconField>
        </CloseIconContainer>

        <ModalWindow>
          <ModalContainer>
            <ImageBookContainer src={data.imageUrl} />
            <BookInfo>
              <Title>{data.title}</Title>
              <Authors>{data.authors}</Authors>
              <InfoTitle>Informações</InfoTitle>
              <BlockContainer>
                <RowContainer>
                  <SubTitle>Páginas</SubTitle>
                  <Info>{data.pageCount} páginas</Info>
                </RowContainer>
                <RowContainer>
                  <SubTitle>Editora</SubTitle>
                  <Info>{data.publisher}</Info>
                </RowContainer>
                <RowContainer>
                  <SubTitle>Publicação</SubTitle>
                  <Info>{data.published}</Info>
                </RowContainer>
                <RowContainer>
                  <SubTitle>Idioma</SubTitle>
                  <Info>{data.language}</Info>
                </RowContainer>
                <RowContainer>
                  <SubTitle>Título Original</SubTitle>
                  <Info>{data.title}</Info>
                </RowContainer>
                <RowContainer>
                  <SubTitle>ISBN-10</SubTitle>
                  <Info>{data.isbn10}</Info>
                </RowContainer>
                <RowContainer>
                  <SubTitle>ISBN-13</SubTitle>
                  <Info>{data.isbn13}</Info>
                </RowContainer>
              </BlockContainer>
              <Block>
                <InfoTitle>Resenha da editora</InfoTitle>
                <DescriptionContainer>
                  <Description>
                    <Quotes />
                    {data.description}
                  </Description>
                </DescriptionContainer>
              </Block>
            </BookInfo>
          </ModalContainer>
        </ModalWindow>
      </Container>
    )
  );
}

export default Modal;
