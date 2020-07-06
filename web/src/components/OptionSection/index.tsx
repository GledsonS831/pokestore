import React from 'react';

import * as St from './styles';

import Option from './Option'

const OptionSection = () => {
    return (
        <St.Container>
            <St.Content>
                <Option text="POKEMON"/>
                <Option text="SOBRE POKEMON" /> 
                <Option text="AJUDE" />
                <Option text="CONTATO"/>
            </St.Content>
        </St.Container>
    )
}

export default OptionSection;