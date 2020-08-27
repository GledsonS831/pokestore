import React from "react";

import * as St from "./styles";

interface ItemCartProps {
  Name: string;
  Image: string;
  Price: number;
  PriceDivided: number;
}

const ItemCart: React.FC<ItemCartProps> = ({
  Name,
  Image,
  Price,
  PriceDivided,
}) => {
  return (
    <St.Container>
      <St.Image src={Image} />
      <St.ContainerPokemonName>
        <St.PokemonNameContent>{Name}</St.PokemonNameContent>
      </St.ContainerPokemonName>

      <St.ContainerPrice>
        <St.TotalPrice>R$: {Price},99</St.TotalPrice>
        <St.DividedPrice>10x de R$ {PriceDivided},99 sem juros</St.DividedPrice>
      </St.ContainerPrice>
    </St.Container>
  );
};

export default ItemCart;
