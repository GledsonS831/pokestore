import React, { useState, useEffect } from "react";
import { usePokemon } from "../../hooks/AppProvider";
import { useCart } from "../../hooks/CartProvider";
import * as St from "./styles";

import api from "../../services/api";

interface ProductProps {
  pokemonName: string;
}

function handlePrice() {
  var price = Math.random() * (1000 - 200) + 200;
  return [Math.floor(price), Math.floor(price / 10 + 10)];
}

const Product: React.FC<ProductProps> = ({ pokemonName }) => {
  const [type, setType] = useState<string>("");
  const [ability, setAbility] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [priceDivided, setPriceDivided] = useState<number>(0);
  const { itemsCount, setItemsCount } = usePokemon();
  const { productList, setProductList } = useCart();

  function handleCart(): void {
    setProductList([
      ...productList,
      {
        Name: pokemonName,
        Image: image,
        Price: price,
        PriceDivided: priceDivided,
      },
    ]);
  }

  useEffect(() => {
    api.get(pokemonName).then((data) => {
      setImage(data.data.sprites.front_default);
      setType(data.data.types[0].type.name);
      setAbility(data.data.abilities[0].ability.name);
    });
  }, [pokemonName]);

  useEffect(() => {
    var value = handlePrice();
    setPrice(value[0]);
    setPriceDivided(value[1]);
  }, []);

  return (
    <St.Container>
      <St.ImageContainer>
        <St.Image src={image} />
      </St.ImageContainer>

      <St.ProductDescription>
        <St.Description>Name: {pokemonName}</St.Description>
        <St.Description>Type: {type}</St.Description>
        <St.Description>Ability: {ability}</St.Description>
      </St.ProductDescription>

      <St.SellContainer>
        <St.PriceContent>
          <St.TotalPrice>R$: {price},99</St.TotalPrice>
          <St.DividedPrice>
            10x de R$ {priceDivided},99 sem juros
          </St.DividedPrice>
        </St.PriceContent>

        <St.BuyContainer>
          <St.Button
            onClick={() => {
              handleCart();
              setItemsCount(itemsCount + 1);
            }}
          >
            <St.ButtonIcon />

            <St.ButtonText>COMPRAR</St.ButtonText>
          </St.Button>
        </St.BuyContainer>
      </St.SellContainer>
    </St.Container>
  );
};

export default Product;
