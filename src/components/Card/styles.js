import styled from "styled-components";

export const Card = styled.div`
  /* border: solid 5px green; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 272px;
  height: 160px;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 244px;
  max-height: 130px;
  /* border: solid 2px green; */
  /* margin: 19px 0px 19px 0px; */
`;

export const BookImg = styled.img`
  background: ${(props) => `url(${props.imageUrl})`} no-repeat;
  width: 81px;
  min-width: 81px;
  height: 122px;
  background-position: center;
  background-size: cover;
  margin: 16px;
`;
export const BookInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  height: 122px;
  /* margin-top: 16px; */
  /* margin-left: 16px; */
`;
export const BookTitle = styled.div`
  /* width: 127px; */
  /* height: 20px; */
  color: #333333;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
export const BookAuthor = styled.div`
  font-family: "Heebo", sans-serif;
  color: #ab2680;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
`;
export const BookDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  /* height: 60px; */
  width: 100%;
  /* margin-bottom: 16px; */

  /* margin-left: 0; */
  /* border: solid 2px green; */
`;
export const BookSpan = styled.span`
  font-family: "Heebo", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;
