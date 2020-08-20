import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  width: 194px;
  height: 339px;
  flex-direction: column;

  :hover {
    border: 2px solid var(--color-shadow);
    margin-left: -2px;
    margin-top: -2px;
    box-shadow: 12px 12px var(--color-shadow);
  }
  transition: box-shadow 0.4s;
`;

export const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 107px;
`;

export const Image = styled.img`
  width: 85px;
  height: 78px;
`;

export const ProductDescription = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 85px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: var(--color-main);
`;

export const SellContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceContent = styled.div`
  display: flex;
  height: 65px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const TotalPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--color-shadowPink);

  @font-face {
    font-family: Roboto;
    src: url("../../assets/Fonts/Roboto-Regular.ttf");
  }
  font-family: Roboto;
`;

export const DividedPrice = styled.p`
  font-size: 12px;
  font-weight: bold;
  @font-face {
    font-family: Roboto;
    src: url("../../assets/Fonts/Roboto-Regular.ttf");
  }
  font-family: Roboto;
  color: var(--color-grayEffect);
`;

export const BuyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82px;
`;

export const Button = styled.div`
  width: 155px;
  display: flex;
  background: white;
  border: 2px solid var(--color-main);
  cursor: pointer;
  :nth-last-child(1) {
    color: var(--color-main);
    :hover {
      color: white;
      box-shadow: 12px 12px var(--color-shadowPink);
    }
    transition: box-shadow 0.4s;
  }
  :hover {
    background: var(--color-main);
  }
`;

export const ButtonText = styled.p`
  @font-face {
    font-family: Roboto;
    src: url("../../assets/Fonts/Roboto-Regular.ttf");
  }
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  padding-left: 13px;
  padding-top: 9px;
  padding-bottom: 9px;
`;

export const ButtonIcon = styled(FiShoppingCart)`
  width: 20px;
  height: 20px;
  padding-left: 21px;
  padding-top: 9px;
  padding-bottom: 9px;
`;
