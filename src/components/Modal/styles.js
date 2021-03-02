import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);

  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  overflow-y: auto;
`;

export const CloseIcon = styled(IoMdClose)``;

export const CloseIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-right: 32px;
  @media (max-width: 800px) {
    position: absolute;
    top: 10px;
  }
`;

export const CloseIconField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
`;

export const ModalWindow = styled.div`
  height: 608px;
  margin-bottom: 60px;
  width: 769px;
  height: 608px;
  @media (max-width: 800px) {
    display: flex;
    position: absolute;

    height: 100%;
    width: 288px;
    top: 50px;
    margin-bottom: 50px;
    max-height: 860px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }
`;

export const ImageBookContainer = styled.img`
  width: 60%;
  height: 100%;

  padding: 48px 10px 48px 48px;

  @media (max-width: 800px) {
    width: 100%;
    max-height: 350px;
    padding: 25px;
  }
`;
export const BookInfo = styled.div`
  width: 50%;
  height: 100%;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%;
    max-height: 500px;

    padding: 25px;
  }
`;
export const Title = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;

  color: #333333;
`;
export const Authors = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  margin-bottom: 10px;

  color: #ab2680;
`;
export const InfoTitle = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;

  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15px;
`;
export const SubTitle = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  color: #333333;
`;
export const Info = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: right;

  color: #999999;
`;

export const Quotes = styled(ImQuotesLeft)`
  margin-right: 5px;
  font-size: 15px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 10px;
  color: #999999;
`;
export const Description = styled.div`
  width: 276px;
  margin-left: 4px;
  color: #999999;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  padding-right: 13px;
`;

export const Block = styled.div`
  margin-top: 40px;
  overflow: auto;
  margin-right: -45px;

  @media (max-width: 800px) {
    margin-right: 0px;
  }
  ::-webkit-scrollbar {
    width: 4px;

    border-radius: 30px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ab2680;
    border-radius: 30px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const BlockContainer = styled.div`
  max-height: 400 px;
`;
