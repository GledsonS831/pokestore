import React, { useContext, SetStateAction, Dispatch } from "react";
import { createContext, useState } from "react";

interface contextProps {
  pokemonName: string;
  setPokemonName: Dispatch<SetStateAction<string>>;
  itemsCount: number;
  setItemsCount: Dispatch<SetStateAction<number>>;
}

const DataProvider = createContext({} as contextProps);

const AppProvider = ({ children }: any) => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [itemsCount, setItemsCount] = useState<number>(0);
  return (
    <DataProvider.Provider
      value={{ pokemonName, setPokemonName, itemsCount, setItemsCount }}
    >
      {children}
    </DataProvider.Provider>
  );
};

function usePokemon() {
  const pokemonContext = useContext(DataProvider);

  return pokemonContext;
}
export { usePokemon };
export default AppProvider;
