import React from 'react';


import DataTable from '../components/DataTable';

const columns= [
    {
        width: 400,
        label: 'Dessert',
        dataKey: 'dessert',
    },
    {
        width: 240,
        label: 'Calories\u00A0(g)',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 240,
        label: 'Fat\u00A0(g)',
        dataKey: 'fat',
        numeric: true,
    },
    {
        width: 240,
        label: 'Carbs\u00A0(g)',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 240,
        label: 'Protein\u00A0(g)',
        dataKey: 'protein',
        numeric: true,
    },
];

const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
    return { id, dessert, calories, fat, carbs, protein };
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}

export default function Trade(props) {
    return (
        <div>
            <DataTable data={ { columns: columns, rows: rows }} onRowClick={ () => window.alert('row clicked')}/>
        </div>
    );
}
