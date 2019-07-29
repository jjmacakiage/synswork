import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import DataTable from '../components/DataTable';

export default function Blotter() {
    const [data, setData] = useState({ rows: [['f']], columns: ['a'] });
    useEffect( () => {
        //ADD AJAX REQUEST TO FETCH TRADE DATA HERE
        const fetchData = async () => {
            //const result = await axios('');
            //setData(result);
            return;
        };
        fetchData();
    }, []);

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
