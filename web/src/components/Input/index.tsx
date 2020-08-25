import React, { useState } from "react";

import * as St from "./styles";
import Button from "components/Button";

const Input: React.FC = () => {
  const [valueInput, setValueInput] = useState<string>("");

  return (
    <St.Container>
      <St.Search
        placeholder="Digite o pokemon que você deseja..."
        onChange={(data) => {
          setValueInput(data.target.value);
        }}
      />
      <Button
        inputValue={valueInput}
      />
    </St.Container>
  );
};

export default Input;
