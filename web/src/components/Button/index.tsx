import React, { useState, createContext, useContext } from "react";
import api from "../../services/api";
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
  const { pokemonName, setPokemonName } = usePokemon();

  async function handlePokemonName(): Promise<void> {
    await api.get(inputValue).then((data) => {
      if (inputValue.length === 0) {
        setPokemonName("");
      } else {
        setPokemonName(data.data.name);
      }
    }).catch(() => alert("Incorrect Name"));
  }

  return (
    <St.Container
      onClick={() => {
        handlePokemonName();
      }}
    >
      <St.SearchButton>
        <St.ButtonIcon />
      </St.SearchButton>
    </St.Container>
  );
};

export default Button;
