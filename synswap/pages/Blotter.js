import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Grid } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import DataTable from '../components/DataTable';
import Table from "../components/Table";


export default function Blotter() {
    const [data, setData] = useState({});
    const trades = useSelector(state => state.TradeReducer.trades);
    const dispatch = useDispatch();


    useEffect(() => {
        setData(trades);
    }, [trades]);

    function exportToCSV() {
        let csv = '';
        for (let i = 0; i < data.columns.length; i++) {
            csv += data.columns[i] + ',';
        }
        csv += '\n';
        for (let i = 0; i < data.rows.length; i++) {
            let row = data.rows[i];
            csv += row.join(',');
            csv += "\n";
        };

        let hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        let date = new Date();
        let month = date.getUTCMonth();
        let day = date.getUTCDate();
        let year = date.getUTCFullYear();
        let name = year + '-' + month + '-' + day;
        hiddenElement.download = name + '.csv';
        hiddenElement.click();
    }

    return (
      <div>
          <Grid container spacing={ 2 }>
              <Grid item xs={ 12 } style={{ padding: 50 }}>
                    <Table data={ data } />
              </Grid>
          </Grid>

      </div>
    );
}
