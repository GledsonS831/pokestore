import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  grid-area: area2;
  flex-direction: column;
  width: 900px;
`;

export const Description = styled.div`
  display: flex;
  height: 94px;
  align-items: center;
`;

export const TextDescription = styled.p`
  color: var(--color-main);
  font-face {
    font-family: Ubuntu;
    src: url("../../assets/Fonts/UbuntuCondensed-Regular.ttf");
  }
  font-family: Ubuntu;
  font-size: 18px;
`;

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
