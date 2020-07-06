import React from 'react';

import * as St from './styles'
import Content from './Content'

interface ContentProps {
    text: string;
}

const Option: React.FC<ContentProps> = ({ text }) => {
    return (
        <St.Container >
            <Content text={text} />
        </St.Container >
    )
}

export default Option;