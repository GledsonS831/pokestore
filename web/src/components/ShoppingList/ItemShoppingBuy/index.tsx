import React, { NewLifecycle } from 'react';
import * as St from './styles';

interface ItemShoppingProps {
    image: string;
    name: string;
    type: string;
    abilities: string[];
    price: number;
    priceDividided: number;
}

const ItemShopping: React.FC<ItemShoppingProps> = ({ image, name, type, abilities, price, priceDividided }) => {
    return (
        <St.Container>
            <St.Content>
                <St.Image src={image} />
            </St.Content>

            <St.Content>
                <St.PokemonDetailText textType="description">
                    Name: {name} <br />
                </St.PokemonDetailText>

                <St.PokemonDetailText textType="description">
                    Type: {type}
                </St.PokemonDetailText>

                <St.PokemonDetailText textType="description">
                    Ability 1: {abilities[0]}
                </St.PokemonDetailText>

                <St.PokemonDetailText textType="description">
                    Ability 2: {abilities[1]}
                </St.PokemonDetailText>
            </St.Content>

            <St.Content contentType="price">
                <St.PokemonDetailText textType="price">
                    R$: {price}
                   <St.PokemonDetailText textType="priceDividided">
                    até 10x de R$: {priceDividided} sem juros
                </St.PokemonDetailText> 
                </St.PokemonDetailText>

                
            </St.Content>

            <St.Content contentType="buy">
                <St.BuyButton>
                    <St.PokemonDetailText textType="buy">
                        Comprar
                    </St.PokemonDetailText>
                </St.BuyButton>
            </St.Content>

        </St.Container>
    )
}

export default ItemShopping;