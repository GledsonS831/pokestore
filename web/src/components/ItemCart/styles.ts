import styled from "styled-components";

export const Container = styled.div`
  width: 392px;
  height: 90px;
  display: flex;
  border: 2px solid var(--color-main);
  margin-left: 39px;
  margin-bottom: 36px;
`;

export const Image = styled.img`
  width: 88px;
  height: 78px;
  margin: 6px;
`;

export const ContainerPokemonName = styled.div`
  display: flex;
  align-items: flex-end;
  width: 140px;
`;

export const PokemonNameContent = styled.p`
  color: var(--color-main);
  font-face {
    font-family: PTSerif;
    src: url("../../assets/Fonts/PTSerif-Regular.ttf");
  }
  font-family: PTSerif;
  font-size: 18px;
  margin-bottom: 18px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const TotalPrice = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--color-shadowPink);
  font-size: 24px;
  font-face {
    font-family: PTSerif;
    src: url("../../assets/Fonts/PTSerif-Regular.ttf");
  }
  font-family: PTSerif;
`;

export const DividedPrice = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--color-grayEffect);
  font-size: 16px;
  font-face {
    font-family: PTSerif;
    src: url("../../assets/Fonts/PTSerif-Regular.ttf");
  }
  font-family: PTSerif;
`;
