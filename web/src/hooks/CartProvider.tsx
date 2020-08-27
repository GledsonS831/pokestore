import React, { useContext, SetStateAction, Dispatch } from "react";
import { createContext, useState } from "react";

interface listProps {
  Name: string;
  Image: string;
  Price: number;
  PriceDivided: number;
}

interface CartItemsListProps {
  productList: listProps[];
  setProductList: Dispatch<SetStateAction<listProps[]>>;
}

const CartItemsList = createContext({} as CartItemsListProps);

const CartProvider = ({ children }: any) => {
  const [productList, setProductList] = useState<listProps[]>([]);

  return (
    <CartItemsList.Provider value={{ productList, setProductList }}>
      {children}
    </CartItemsList.Provider>
  );
};

function useCart(): CartItemsListProps {
  const cart = useContext(CartItemsList);

  return cart;
}

export { useCart };
export default CartProvider;
