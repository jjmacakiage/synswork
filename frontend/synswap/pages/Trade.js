import React, { useState } from 'react';
import { Tab, Tabs, TextField, Grid, Typography } from "@material-ui/core";
import BestMatch from '../components/trade/BestMatch';
import { TabPanel, a11yProps } from "../components/trade/Helpers";
import { generateInitial } from "../js/tradehelpers";

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
    const { data } = props;

    const [value, setValue] = useState(0);
    const [score, setScore] = useState(0);

    /**
     * @function tabChange
     * @param e
     * @param newValue
     * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
     */
    const tabChange = (e, newValue) => {
        setValue(newValue);
    };

    const BEST_MATCH_TITLE = 'Best Match Score: ' + score + '%';

    const generateMain = () => {
        return (
            <Typography variant="overline"> Lmao </Typography>
        )
    };
    return (
        <div>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <div>
                        <Tabs
                            value={value}
                            onChange={tabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Main" {...a11yProps(0)} />
                            <Tab label="Details" {...a11yProps(1)} />
                            <Tab label="Cashflow Schedule" {...a11yProps(2)} />
                            <Tab label="Confirmation" {...a11yProps(3)} />
                            <Tab label={ BEST_MATCH_TITLE } {...a11yProps(4)} />
                        </Tabs>

                        <TabPanel value={value} index={0}>
                            { generateMain() }
                        </TabPanel>

                        <TabPanel value={value} index={1}>

                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            <Typography variant="overline"> Cashflow Schedule </Typography>
                        </TabPanel>

                        <TabPanel value={value} index={3}>
                            Confirmation
                        </TabPanel>

                        <TabPanel index={4} value={value}>
                            <BestMatch score={ score }/>
                        </TabPanel>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

