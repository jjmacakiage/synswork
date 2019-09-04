import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from "react-redux";
import Table from "../components/Table";


export default function Blotter(props) {
    const trades = useSelector(state => state.TradeReducer.trades);
    const { onRowClick } = props;
    return (
      <div>
          <Grid container spacing={ 2 }>
              <Grid item xs={ 12 } style={{ padding: 50 }}>
                    <Table data={ trades } onRowClick={ onRowClick }/>
              </Grid>
          </Grid>

      </div>
    );
}
