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
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 55px;
`;

export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  margin-left: 39px;
  justify-content: flex-start;
`;
export const HeaderText = styled.p`
  display: flex;

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

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClearButton = styled.button`
  height: 20px;
  background: var(--color-secundary);
  border: none;
  border-radius: 8px;
  :focus,
  :active {
    outline: none;
  }
  margin-right: 39px;
  margin-top: 13px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: crosshair;
`;

export const TextButton = styled.p`
  color: white;
  @font-face {
    font-family: ROBOTO;
    src: url("../../assets/Fonts/Roboto-Regular.ttf");
  }

  font-family: ROBOTO;
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
