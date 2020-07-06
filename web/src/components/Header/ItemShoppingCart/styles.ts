import styled from 'styled-components';
import { global } from '../../../styles/themes';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* border: 1px solid green; */
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px; 
    height: 40px;
    :hover{
        cursor: pointer;
    }
    
`
