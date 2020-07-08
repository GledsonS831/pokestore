import React from 'react';

import { storiesOf } from '@storybook/react';

import ShoppingList from '../../../../src/components/ShoppingCatalog/ShoppingList';

const Logo = require('./../../../../src/assets/Logo/POKESTORE.svg')

import ItemShoppingBuy from '../../../../src/components/ShoppingCatalog/ShoppingList/ItemShoppingBuy';

storiesOf('ShoppingList', module).add("Item", () => <ItemShoppingBuy
    name="pikachu"
    image={Logo}
    type="eletric"
    abilities={['a', 'b']}
    price={299.99}
    priceDividided={100 / 10}
/>).add('List Choosed', () => <ShoppingList />)