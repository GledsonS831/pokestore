import React from "react";

import * as St from "./styles";
import Button from "components/Button";

const Input: React.FC = () => {
  return (
    <St.Container>
      <St.Search placeholder="Digite o pokemon que você deseja..." />
      <Button />
    </St.Container>
  );
};

export default Input;
