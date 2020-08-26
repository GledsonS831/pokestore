import React from "react";

import * as St from "./styles";

const ShoppingCart: React.FC = () => {
  return (
    <St.Container>
      <St.Header>
        <St.HeaderText>Produtos adicionados ao carrinho</St.HeaderText>
      </St.Header>
      <St.ItemsContainer>
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
        <St.ItemCart />
      </St.ItemsContainer>
      <St.CheckOutContainer>
        <St.TextCheckout>Finalizar Compra</St.TextCheckout>
      </St.CheckOutContainer>
    </St.Container>
  );
};

export default ShoppingCart;
