import styled, { css } from 'styled-components';
import { color } from '../theme';

export const Cell = styled.div`
    padding: .5em;
    @media(max-width: 1000px) {
        &::before {
            font-weight: 600;
            content: ${props => props.label && `'${props.label}: '`};
        }
    }
`;