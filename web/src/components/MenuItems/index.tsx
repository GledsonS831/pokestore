import React, { useState, useEffect, useContext } from "react";
import Product from "../Product/";
import api from "../../services/api";
import { usePokemon } from "../../hooks/AppProvider";
import * as St from "./styles";

const MenuItems: React.FC = () => {
  const [listPokemon, setListPokemon] = useState<string[]>([]);
  const { pokemonName } = usePokemon();
  useEffect(() => {
    api.get("/").then((data) => {
      var arr = [];
      for (var i = 0; i < 20; i++) {
        arr.push(data.data.results[i].name);
      }
      setListPokemon(arr);
    });
  }, []);

  function handlePokemonList(): any {
    return pokemonName.length === 0 ? (
      listPokemon.map((item) => <Product pokemonName={item} />)
    ) : (
      <Product pokemonName={pokemonName} />
    );
  }

  return (
    <St.Container>
      <St.Description>
        <St.TextDescription>
          {pokemonName.length === 0
            ? "Lista de produtos recomendados"
            : pokemonName}
        </St.TextDescription>
      </St.Description>
      <St.ItemsList>{handlePokemonList()}</St.ItemsList>
    </St.Container>
  );
};

export default MenuItems;
