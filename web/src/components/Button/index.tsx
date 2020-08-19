import React from "react";

import * as St from "./styles";
const Button: React.FC = () => {
  return (
    <St.Container>
      <St.SearchButton>
        <St.ButtonIcon />
      </St.SearchButton>
    </St.Container>
  );
};

export default Button;
