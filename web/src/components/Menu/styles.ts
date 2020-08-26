import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "area1 area2 area3";
`;

export const colLateralCart = styled.div`
  display: flex;
  justify-content: center;
  grid-area: area3;
`;
