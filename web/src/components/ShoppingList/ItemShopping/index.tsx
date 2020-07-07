import React from 'react';

import * as St from './styles';

const ItemShopping: React.FC = () => {
    return (
        <St.Container>
            <St.Content>
                <St.Image src={"https://i.pinimg.com/564x/5b/2d/20/5b2d204ce5394a309157f3a71f1eb6c6.jpg"} />
            </St.Content>

            <St.Content>
                <St.PokemonDetailText textType="description">
                    Name: pikachu <br />
                    Type: eletric <br />
                    Abilities: run
                </St.PokemonDetailText>

            </St.Content>

            <St.Content contentType="price">
                <St.PokemonDetailText textType="price">
                    R$: 259,99
                </St.PokemonDetailText>
                <St.PokemonDetailText textType="priceDividided">
                    R$: 259,99
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