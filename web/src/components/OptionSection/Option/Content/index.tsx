import React from 'react';

import * as St from './styles';

interface ContentProps {
    text: string;
}

const Content: React.FC<ContentProps> = ({text}) => {
    return (
        <St.Container>
            {text}
        </St.Container>
    )
}

export default Content;