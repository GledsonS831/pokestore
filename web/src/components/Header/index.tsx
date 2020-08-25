import React from "react";

import * as St from "./styles";
import pokestore from "../../assets/Images/pokestore.png";
import Input from "../Input";
import ItemsAmount from "../ItemsAmount";
import { usePokemon } from "../../hooks/AppProvider";
const Header: React.FC = () => {
  const { itemsCount } = usePokemon();
  return (
    <St.Container>
      <St.Logo src={pokestore} />
      <St.InputSearchContainer>
        <Input />
        <St.CartShoppingIconContainer>
          <St.CartShoppingIcon />
          <ItemsAmount amount={itemsCount} />
        </St.CartShoppingIconContainer>
      </St.InputSearchContainer>
    </St.Container>
  );
};

export default Header;
