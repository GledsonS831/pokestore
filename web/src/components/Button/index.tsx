import React, { useState, createContext, useContext } from "react";
import { usePokemon } from "../../hooks/AppProvider";
import * as St from "./styles";

interface ButtonProps {
  inputValue: string;
}

interface NameContextProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ inputValue }) => {
  const [name, setName] = useState<string>("");
  const { itemsCount, setPokemonName, setItemsCount } = usePokemon();

  return (
    <St.Container
      onClick={() => {
        setPokemonName(inputValue);
      }}
    >
      <St.SearchButton>
        <St.ButtonIcon />
      </St.SearchButton>
    </St.Container>
  );
};

export default Button;
