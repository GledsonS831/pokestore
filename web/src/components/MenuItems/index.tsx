import React, { useState, useEffect } from "react";
import Product from "../Product/";
import api from "../../services/api";
import * as St from "./styles";

const MenuItems: React.FC = () => {
  const [listPokemon, setListPokemon] = useState<string[]>([]);

  useEffect(() => {
    api.get("/").then((data) => {
      var arr = [];
      for (var i = 0; i < 20; i++) {
        console.log(data.data.results[i].name);
        arr.push(data.data.results[i].name);
      }
      setListPokemon(arr);
    });
  }, []);

  return (
    <St.Container>
      <St.Description>
        <St.TextDescription>Lista de Produtos:</St.TextDescription>
      </St.Description>
      <St.ItemsList>
        {/* <Product pokemonName="pikachu" /> */}
        {listPokemon.map((item) => {
          return <Product pokemonName={item} />;
        })}
      </St.ItemsList>
    </St.Container>
  );
};

export default MenuItems;
