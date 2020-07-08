import React from 'react';
import Header from '../../components/Header';
import OptionSection from '../../components/OptionSection';

import ItemShopping from '../../components/ShoppingCatalog/ShoppingList/ItemShoppingBuy';

const Home = () => {
    return (
        <>
            <Header />
            <OptionSection />
            <ItemShopping />
        </>
    )
}

export default Home;