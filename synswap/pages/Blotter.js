import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Grid } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import DataTable from '../components/DataTable';
import Header from '../components/main/Header';

export default function Blotter() {
    const [data, setData] = useState({ rows: [['f']], columns: ['a'] });
    const trades = useSelector(state => state.TradeReducer.tradeStates);
    const dispatch = useDispatch();

    useEffect( () => {
        //ADD AJAX REQUEST TO FETCH TRADE DATA HERE
        const fetchData = async () => {
            const url = 'http://localhost:4000/api/parties/1/trades';
            try {
                axios.get(url)
                    .then(function (response) {
                        console.log(response.data.trades);
                        setData(response.data.trades);
                    });
            } catch (error) {
                console.error(
                    'You have an error in your code or there are Network issues.',
                    error
                );
                return error;
            }
        };
        fetchData();
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
              <Grid item xs={ 12 }>
                  <Button color="primary" onClick={ exportToCSV.bind(this) }>
                      Export to CSV
                  </Button>
              </Grid>
              <Grid item xs={ 12 }>
                  <DataTable data={ data }/>
              </Grid>
          </Grid>

      </div>
    );
}
