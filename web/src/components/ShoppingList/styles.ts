import styled from 'styled-components';
import { global } from '../../styles/themes';

export const Container = styled.div`
    border: 1px solid yellow;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    justify-content: center;
`

export const ContentList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
`

export const Text = styled.p`
    display: flex;
    height: 20px;
    justify-content: center;
    align-items: center;
`

export const ChooseList = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid yellow;
`
export const ContainerChooseList = styled.div`
    display: flex;
    flex-direction: row;
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
`

export const TextPokemon = styled.p``

export const Finished = styled.button`
    width: 220px;
    height: 40px;
`