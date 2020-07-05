import React from 'react';

import * as St from './styles';

import ItemCart from './ItemCart';
import CountItems from './CountingItems';

const ItemShoppingCart: React.FC = () => {
    return (
        <St.Container>
            <ItemCart />
            <CountItems />
        </St.Container>
    )
}

export default ItemShoppingCart;