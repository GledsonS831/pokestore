import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components'
import { global } from '../../../styles/themes'
import { FiSearch } from 'react-icons/fi';

interface SearchButtonProps {
    colorButton?: string;
}

export const Container = styled.div`
    display: flex;
    width: 560px;
    height: 40px;
`

export const SearchBar = styled.input`
    width: 520px;
    background-color: ${global.colors.background};
    color: ${global.colors.main};
    padding-left: 20px;
    ::placeholder{
        color: ${global.colors.main};
        font-face {
            font-family: modal;
            src: url(${global.fonts.modal});
        }
        font-family: modal;
    };
    border-style: solid;
    border-color:#969696;
    border-width:1px;
    border-right-color:#969696;
    :focus{
        outline: none;
    }
`

export const SearchIcon = styled(FiSearch)`
    color: ${ global.colors.secondary};
`

export const SearchButton = styled.button<SearchButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height:40px;
    border-width:1px;
    border-style:solid;
    border-color:#969696;
    border-left-style:none;
    background-color: ${ ({ colorButton }) => colorButton ? colorButton : global.colors.background};
    :hover{
        background-color: ${global.colors.main};
            &:hover ${ SearchIcon} {
            color: ${ global.colors.background};
        }
        border-width:1px;
        border-color:${ global.colors.main}
    };

    :active {
        box-shadow:inset 0 0 12px #000000;
    }

    
    :focus {
        outline: none;
    }
`