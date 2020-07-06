import styled from 'styled-components';

import { global } from '../../../../styles/themes';

export const Container = styled.p`
    font-size: 15px;
    color: ${global.colors.background};
    @font-face {
        font-family: 'ubuntu';
        src: url(${global.fonts.ubuntu});
    }
    font-family: ubuntu, sans-serif;
`