import styled, { css } from 'styled-components';
import { color } from '../theme';

export const Row = styled.div`
    border: pink;
    padding: 5px;
    display: grid;
    grid-template-columns: ${({ children }) => `repeat(${children.length}, 1fr)`};
    ${props => props.onClick && css`
        &:hover:hover {
            cursor: pointer;
            background-color: ${color('grey.light')};
        }
    
    `}
    @media(max-width: 1000px) {
        border: 1px solid ${color('grey.light')};
        display: grid;
        grid-template-columns: 1fr;
    }

`;