import React, {useState} from 'react';
import { Tab, Tabs } from "@material-ui/core";


import DataTable from '../components/DataTable';
import { TabContainer } from "../utils/tradehelpers";
import BestMatch from '../components/trade/BestMatch';

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
    const [value, setValue] = useState(0);
    const [data, setData] = useState({ rows: [], columns: []});
    const [score, setScore] = useState(0);

    /**
     * @function tabChange
     * @param e
     * @param newValue
     * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
     */
    function tabChange(e, newValue) {
        setValue(newValue);
    }

    const BEST_MATCH_TITLE = 'Best Match Score: ' + score + '%';
    return (
        <div>
            <div>
                <Tabs
                    value={value}
                    onChange={tabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Fields"/>
                    <Tab label="Autofill"/>
                    <Tab label="CashFlow Schedule"/>
                    <Tab label="Confirmation"/>
                    <Tab label={ BEST_MATCH_TITLE } />
                </Tabs>
                {
                    value === 0 &&
                    (
                        <TabContainer>
                            <DataTable data={ props.data } onRowClick={() => window.alert('row clicked')}/>
                        </TabContainer>
                    )
                }
                {
                    value === 1 &&
                    (
                        <TabContainer>
                            <DataTable data={{columns: columns, rows: rows}} onRowClick={() => window.alert('row clicked')}/>
                        </TabContainer>
                    )
                }
                {
                    value === 2 &&
                    (
                        <h1> CashFlow Schedule </h1>
                    )
                }
                {
                    value === 3 &&
                    (
                        <h1> Confirmation </h1>
                    )
                }
                {
                    value === 4 &&
                    (
                        <BestMatch score={ score }/>
                    )
                }
            </div>
        </div>
    )
}

