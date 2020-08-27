import React from "react";
import api from "../../services/api";
import { usePokemon } from "../../hooks/AppProvider";
import * as St from "./styles";

interface ButtonProps {
  inputValue: string;
}

const Button: React.FC<ButtonProps> = ({ inputValue }) => {
  const { setPokemonName } = usePokemon();

  async function handlePokemonName(): Promise<void> {
    await api
      .get(inputValue)
      .then((data) => {
        if (inputValue.length === 0) {
          setPokemonName("");
        } else {
          setPokemonName(data.data.name);
        }
      })
      .catch(() => {
        var num = Number(inputValue);
        num ? alert("Incorrect ID") : alert("Incorrect Name");
      });
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
