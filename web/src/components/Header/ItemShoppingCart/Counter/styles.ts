import styled from 'styled-components';
import { global } from '../../../../styles/themes';

export const CountSpan = styled.span`
    color: ${global.colors.background};
    font-size: 15px;
    position: absolute;
    margin-left: 18px;
    padding-bottom: 7px;
    font-face {
        font-family: modal;
        src: url(${global.fonts.modal});
    }
    font-family: modal;
`