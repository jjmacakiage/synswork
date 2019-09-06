import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import fetch from 'isomorphic-unfetch';
import { useSelector } from "react-redux";
import DataTable from '../VirtualisedTable';

export default function BestMatch(props) {
    const [data, setData] = useState({ columns: ['Fields', 'Party', 'Counterparty'], rows: [['stuff', 'stuff', 'stuff']] });
    const url = '';
    const username = useSelector(state => state.AuthReducer.username);

    return (
        <div>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <DataTable data={ data } />
                </Grid>
                <Grid item xs={ 12 }>
                    <Grid container spacing={ 2 } style={{ justifyContent: "space-around" }}>
                        <Grid item xs={ 3 }>
                            <Button color="primary" variant="contained"> Amend </Button>
                        </Grid>
                        <Grid item xs={ 3 }>
                            <Button color="primary" variant="contained"> Unmatch </Button>
                        </Grid>
                        <Grid item xs={ 3 }>
                            <Button color="primary" variant="contained"> Manually Match </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
