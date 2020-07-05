import styled from 'styled-components';
import { global } from '../../../styles/themes';
import { FaShoppingCart } from 'react-icons/fa';

export const ItemCart = styled(FaShoppingCart)`
    width: 28px;
    height: 28px;
    color: ${global.colors.secondary};
`