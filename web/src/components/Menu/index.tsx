import React from "react";
import MenuItems from "../MenuItems/";
import ShoppingCart from "../ShoppingCart";
import * as St from "./styles";

const Menu: React.FC = () => {
  return (
    <St.Container>
      <MenuItems />
      <St.colLateralCart>
        <ShoppingCart />
      </St.colLateralCart>
    </St.Container>
  );
};

export default Menu;
