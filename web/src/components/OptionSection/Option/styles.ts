import styled, { Keyframes } from 'styled-components';

import { global } from '../../../styles/themes';

export const Container = styled.div`
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        height: 74px;
        background-color: ${global.colors.shadowItem};
    }
    transition: 0.32s;
`