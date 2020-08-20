import React from "react";
import Product from "../Product/";
import * as St from "./styles";

const MenuItems: React.FC = () => {
  return (
    <St.Container>
      <St.Description>
        <St.TextDescription>Lista de Produtos:</St.TextDescription>
      </St.Description>
      <St.ItemsList>
        <Product pokemonName="pikachu" />
      </St.ItemsList>
    </St.Container>
  );
};

export default MenuItems;
