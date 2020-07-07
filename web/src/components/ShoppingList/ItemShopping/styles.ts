import styled from 'styled-components';
import { global } from '../../../styles/themes';

interface ContentProps {
    contentType?: string;
}

interface PokemonDetailTextProps {
    textType: string;
}

export const Container = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    :hover{
        border: 2px solid ${global.colors.shadowBuy};
        box-shadow: 15px 15px ${global.colors.shadowBuy};
    }
    transition: box-shadow 0.35s;
`

export const Content = styled.div<ContentProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${({ contentType }) => {
        if (contentType === 'buy') return `
            border: 2px solid ${global.colors.main}; 
            margin: 20px 20px;
        `
        return null;
    }}
    ${({ contentType }) => {
        if (contentType === 'buy') return `
            :hover{
                box-shadow: 10px 10px ${global.colors.shadowPink};
                background-color: ${global.colors.main};
                color: white;
                transition: box-shadow 0.35s;
            }
        `
        return null;
    }}
    
    /* border: 1px solid red; */

    
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
`

export const PokemonDetailText = styled.p<PokemonDetailTextProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */


    ${({ textType }) => {
        if (textType === 'price' || textType === 'priceDividided') return 'margin: 0px;';
        if (textType === 'description') return 'margin: 5px;'
        return null;
    }}
    
    ${({ textType }) => {
        if (textType === 'buy') return 'font-weight: bold;'
        return null;
    }}

    font-size: ${({ textType }) => {
        if (textType === 'description' || textType === 'buy') return '18px';
        if (textType === 'price') return '26px';
        if (textType === 'priceDividided') return '12px';
    }};

    color: ${({ textType }) => {
        if (textType === 'description') return global.colors.main;
        if (textType === 'price') return global.colors.shadowPink;
        if (textType === 'priceDividided') return global.colors.priceDividided;
    }};

    text-decoration: ${({ textType }) => {
        if (textType === 'description') return 'underline';
        return 'none';
    }};

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
   
`

