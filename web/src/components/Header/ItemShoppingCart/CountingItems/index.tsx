import React from 'react';
import * as St from './styles';
import Item from '../../../../assets/itemCart/countItems.svg';

const CountItems: React.FC = () => {
    return (
        <>
            <St.ItemCount src={Item} />
        </>
    )
}

export default CountItems;