import React, { useState, useEffect } from 'react';
import api from '../../services/api';

interface PokemonProps {
    name : string;
}

const Pokemon: React.FC<PokemonProps> = ({name}) => {
    const [pokemon, pokemonState] = useState<string>('');
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        api.get(name).then((res) => {
            pokemonState(res.data['abilities'][1]['ability']['name']);
        })
    }, [])
    return (
        <>
            {pokemon}
        </>
    )
}

export default Pokemon;