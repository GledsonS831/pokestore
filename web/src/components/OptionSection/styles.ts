import styled from 'styled-components';
import { global } from '../../styles/themes';

export const Container = styled.section`
    display: grid;
    align-items: flex-end;
    height: 64px;
    
`
export const Content = styled.div`
    display: grid;
    padding-left: 100px;
    padding-right: 100px;
    background-color: ${global.colors.main};
    height: 54px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 240px;
    /* border: 1px solid black; */
`
