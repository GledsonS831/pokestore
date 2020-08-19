import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: grid;

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "area1 area2"
    "area3 area4";
`;

export const ItemsAmountContent = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  @font-face {
    font-family: ubuntu;
    src: url("../../assets/Fonts/UbuntuCondensed-Regular.ttf");
  }
  font-family: ubuntu;
  background: var(--color-secundary);
  border-radius: 100%;
  grid-area: area2;
`;

export const Amount = styled.span`
  color: white;
  font-size: 11px;
`;
