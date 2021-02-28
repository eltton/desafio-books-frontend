import styled from "styled-components";

import background from "../../assets/bg.png";

export const Container = styled.div`
  background: url(${background}), no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  height: 100vh;
  /* border: solid 2px green; */
`;

export const CardsBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;

  padding: 1rem;
  place-items: center;
  /* 
  border: solid 5px red; */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 280px);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 280px);
  }
`;
