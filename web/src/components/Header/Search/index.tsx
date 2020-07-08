import React, { useState } from 'react';
import * as St from './styles';
import { global } from '../../../styles/themes'
import styled from 'styled-components';

interface SearchProps {
    typeInput?: string;
    placeholderInput?: string;
    colorButton?: string;
}
var getText: string = ''
const Search: React.FC<SearchProps> = ({ typeInput, placeholderInput, colorButton = "" }) => {
    const [textInput, setTextInput] = useState<string>('');
    getText = textInput;
    return (
        <St.Container>
            <St.SearchBar type={typeInput} placeholder={placeholderInput} onChange={(event) => setTextInput(event.target.value)} />
            <St.SearchButton onClick={() => console.log(textInput)}>
                <St.SearchIcon size={18} />
            </St.SearchButton>
        </St.Container>
    )
}

export {
    getText
}
export default Search;