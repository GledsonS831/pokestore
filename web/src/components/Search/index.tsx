import React, { useState } from 'react';
import * as St from './styles';
import { global } from '../../styles/themes'
import styled from 'styled-components';

interface SearchProps {
    typeInput?: string;
    placeholderInput?: string;
    colorButton?: string;
}

const Search: React.FC<SearchProps> = ({ typeInput, placeholderInput, colorButton = "" }) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    return (
        <St.Container>
            <St.SearchBar type={typeInput} placeholder={placeholderInput} />
            <St.SearchButton>
                <St.SearchIcon size={18} />
            </St.SearchButton>
        </St.Container>
    )
}

export default Search;