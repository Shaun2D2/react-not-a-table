import React from 'react';

import { Cell, Row, Table } from '../src/index';

// const clickHandler = function() { return this.id };

const TABLE_DATA = [
    {
        id: 1,
        name: "Robutte Guilliman",
        food: "Pizza",
    },
    {
        id: 2,
        name: "Horus Lupercal",
        food: "Chicken",
    },
    {
        id: 3,
        name: "Ferrus Manus",
        food: "Sub Sandwich",
    },
    {
        id: 4,
        name: "Lion El'Johnson",
        food: "Turkey Sandwich",
    },

    {
        id: 5,
        name: "Rogal Dorn",
        food: "Cheese Burger",
    },
];

const createClickHandler = (id) => () => console.log(id);

export default {
  title: 'Table',
  component: Table,
};

const Template = (args) => (
    <Table {...args}>
        {TABLE_DATA.map(record => (<Row onClick={createClickHandler(record.id)}>{Object.entries(record).map(([key, value]) => <Cell>{value}</Cell>)}</Row>))}
    </Table>
);

export const DefaultTable = Template.bind({});

export const WithData = Template.bind({});
WithData.args = { data: TABLE_DATA }

// export const Stripped = Template.bind({});
// Stripped.args = { stripped: true };
