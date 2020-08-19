import React from "react";

import * as St from "./styles";
import pokestore from "../../assets/Images/pokestore.png";
import Input from "../Input";
import ItemsAmount from "../ItemsAmount";
const Header: React.FC = () => {
  return (
    <St.Container>
      <St.Logo src={pokestore} />
      <St.InputSearchContainer>
        <Input />
        <St.CartShoppingIconContainer>
          <St.CartShoppingIcon />
          <ItemsAmount amount={999} />
        </St.CartShoppingIconContainer>
      </St.InputSearchContainer>
    </St.Container>
  );
};

export default Header;
