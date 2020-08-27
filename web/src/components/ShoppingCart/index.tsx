import React from "react";
import ItemCart from "../../components/ItemCart";
import { useCart } from "../../hooks/CartProvider";
import * as St from "./styles";

const ShoppingCart: React.FC = () => {
  const { productList } = useCart();
  return (
    <St.Container>
      <St.Header>
        <St.HeaderText>Produtos adicionados ao carrinho</St.HeaderText>
      </St.Header>
      <St.ItemsContainer>
        {productList.length === 0
          ? null
          : productList.map((item) => {
              return (
                <ItemCart
                  Name={item.Name}
                  Image={item.Image}
                  Price={item.Price}
                  PriceDivided={item.PriceDivided}
                />
              );
            })}
      </St.ItemsContainer>
      <St.CheckOutContainer>
        <St.TextCheckout>Finalizar Compra</St.TextCheckout>
      </St.CheckOutContainer>
    </St.Container>
  );
};

export default ShoppingCart;
