import { useMemo } from 'react';
import styled, { css } from 'styled-components';

import { Header, Row, Cell } from '../';

import { color } from '../theme';

const BaseTable = ({ data, children, className }) => {
    if (!data) return children;

    const headers = useMemo(() => {
        const allKeys = data.reduce((acc, value) => [ ...acc, ...Object.keys(value) ], []);

        return Array.from(new Set(allKeys));
    }, [data]);

    return (
        <div className={className}>
            <Header columnKeys={headers} />
            {data.map(record => (<Row {...data.rowAttributes}>{Object.entries(record).map(([key, value]) => <Cell label={key}>{value}</Cell>)}</Row>))}
        </div>
    )

}

export const Table = styled(BaseTable)`
    display: grid;
    grid-template-columns: 1fr;
    ${props => props.stripped && css`
        > div:nth-child(2n) {
            background-color: ${color('grey.lightest')};
        }
    
    `}
    @media(max-width: 1000px) {
        grid-template-columns: ${({ children }) => `repeat(3, 1fr)`};
        grid-gap: .4em;
    }

    @media(max-width: 700px) {
        grid-template-columns: 1fr;
        grid-gap: .6
    }
`;
