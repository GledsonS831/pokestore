import styled from "styled-components";

export const Container = styled.div`
  margin-top: 54px;
  width: 470px;
  height: 451px;
  border-radius: 5px;
  border: 2px solid var(--color-shadow);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-left: 39px;
  height: 55px;
`;

export const HeaderText = styled.p`
  color: var(--color-secundary);
  @font-face {
    font-family: PTSerif;
    src: url("../../assets/Fonts/PTSerif-Regular.ttf");
  }
  font-weight: bold;
  font-family: PTSerif;
  font-size: 20px;
  margin-top: 13px;
`;

export const ItemsContainer = styled.div`
  height: 348px;
  overflow-y: auto;
`;

export const CheckOutContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main);
  border-radius: 0px 0px 5px 5px;
`;

export const TextCheckout = styled.p`
  color: white;
  font-size: 26px;
  @font-face {
    font-family: PTSerif;
    src: url("../../assets/Fonts/PTSerif-Regular.ttf");
  }
  cursor: pointer;
  font-family: PTSerif;
`;
