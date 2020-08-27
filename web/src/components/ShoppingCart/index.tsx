import React from "react";
import ItemCart from "../../components/ItemCart";
import { useCart } from "../../hooks/CartProvider";
import { usePokemon } from "../../hooks/AppProvider";

import * as St from "./styles";

const ShoppingCart: React.FC = () => {
  const { productList, setProductList } = useCart();
  const { setItemsCount } = usePokemon();

  return (
    <St.Container>
      <St.Header>
        <St.ContainerText>
          <St.HeaderText>Produtos adicionados ao carrinho</St.HeaderText>
        </St.ContainerText>
        <St.ContainerButton>
          <St.ClearButton
            onClick={() => {
              setProductList([]);
              setItemsCount(0);
            }}
          >
            <St.TextButton>CLEAR</St.TextButton>
          </St.ClearButton>
        </St.ContainerButton>
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
      <St.LinkPage to="/thanks">
        <St.CheckOutContainer>
          <St.TextCheckout>Finalizar Compra</St.TextCheckout>
        </St.CheckOutContainer>
      </St.LinkPage>
    </St.Container>
  );
};

export default ShoppingCart;
