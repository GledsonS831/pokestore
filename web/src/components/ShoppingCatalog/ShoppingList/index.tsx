import React, { useEffect, useState, ReactComponentElement } from 'react';
import api from '../../../services/api';
import * as St from './styles';

import ItemShopping from './ItemShoppingBuy';
import { getText } from '../../Header/Search'

const ShoppingList: React.FC = () => {

    const [pokemonName, setPokemonName] = useState<string>('');
    const [pokemonImage, setPokemonImage] = useState<string>('');
    const [pokemonType, setPokemonType] = useState<string>('');
    const [pokemonAbilities, setPokemonAbilities] = useState<Array<string>>([]);
    const [pokemonPrice, setPokemonPrice] = useState<number>(0);
    const [pokemonPriceDividided, setPokemonPriceDividided] = useState<number>(0);
    const [lista, setLista] = useState<Array<JSX.Element>>([])
    var num = 0;

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    num = getRandomIntInclusive(100, 999);
    useEffect(() => {
        api.get(getText).then((pokemon) => {
            setPokemonName(pokemon.data.name);
            setPokemonImage(pokemon.data.sprites.front_default);
            setPokemonType(pokemon.data.types[0].type.name);
            setPokemonAbilities([pokemon.data.abilities[0].ability.name, pokemon.data.abilities[1].ability.name]);
            setPokemonPrice(num);
            setPokemonPriceDividided((Math.round((num + 10) / 10) + 0.99));
        })
        console.log("ac")
    }, [])

    return (
        <St.Container>
            <St.Content>
                <ItemShopping
                    name={pokemonName}
                    image={pokemonImage}
                    type={pokemonType}
                    abilities={pokemonAbilities}
                    price={pokemonPrice}
                    priceDividided={pokemonPriceDividided}
                />
            </St.Content>
        </St.Container>

    )

}

export default ShoppingList;