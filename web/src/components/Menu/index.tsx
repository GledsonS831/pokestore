import React from "react";
import MenuItems from "../MenuItems/";
import * as St from "./styles";

const Menu: React.FC = () => {
  return (
    <St.Container>
      <MenuItems />
    </St.Container>
  );
};

export default Menu;
