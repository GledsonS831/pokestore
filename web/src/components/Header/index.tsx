import React from 'react';
import * as St from './styles';

import ItemShoppingCart from './ItemShoppingCart'
import PokemonLogo from './PokemonLogo'
import Search from './Search';

const Header: React.FC = () => {
    return (
        <St.Container>
            <PokemonLogo />
            <Search typeInput="search" placeholderInput="Digite o pokemon que você procura..."/>
            <ItemShoppingCart />
        </St.Container>
    )
}

export default Header;