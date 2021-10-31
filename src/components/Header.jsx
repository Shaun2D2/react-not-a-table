import React from 'react';
import styled from "styled-components";
import { Row } from './Row'
import { Cell } from './Cell';
import { color } from '../theme';

export const BaseHeader = ({ columnKeys, className }) => (
    <Row className={className}>
        {columnKeys.map(item => <Cell>{item}</Cell>)}
    </Row>
)

export const Header = styled(BaseHeader)`
    font-weight: bold;
    background-color: ${color('grey.regular')};
    @media(max-width: 1000px) {
        display: none;
    }
`;