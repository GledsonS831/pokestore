import React from "react";

import * as St from "./styles";

const Product: React.FC = () => {
  return (
    <St.Container>
      <St.ImageContainer>
        <St.Image />
      </St.ImageContainer>

      <St.ProductDescription>
        <St.Description>Nome: Pikachu</St.Description>
        <St.Description>Tipo: Elétrico</St.Description>
        <St.Description>Habilidade: Choque do trovão</St.Description>
      </St.ProductDescription>

      <St.SellContainer>
        <St.PriceContent>
          <St.TotalPrice>R$: 999,99</St.TotalPrice>
          <St.DividedPrice>10x de R$ 99,99 sem juros</St.DividedPrice>
        </St.PriceContent>

        <St.BuyContainer>
          <St.Button>
            <St.ButtonIcon />

            <St.ButtonText>COMPRAR</St.ButtonText>
          </St.Button>
        </St.BuyContainer>
      </St.SellContainer>
    </St.Container>
  );
};

export default Product;
