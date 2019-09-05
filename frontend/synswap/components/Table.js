import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import Trade from '../pages/Trade';
import { doText, flatValues } from "../js/tradehelpers";

import {
    AddBox, ArrowUpward,
    Check, ChevronLeft,
    ChevronRight, Clear,
    DeleteOutline, Edit,
    FilterList, FirstPage,
    LastPage, Remove,
    SaveAlt, Search,
    ViewColumn
} from "@material-ui/icons";

const Table = props => {
    const { data, onRowClick } = props;
    const columns = (!data.rows) ? Object.keys(flatValues(data[0])) : data.columns;

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    function formatColumns(columns) {
        if (columns.length === 0 || columns[0].width) {
            return columns;
        }
        let result = [];
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            const object = {
                title: doText(column),
                field: column,
            };
            result.push(object);
        }
        return result;
    }
    function formatRows(data) {
        let result = [];
        for (let i = 0; i < data.length; i++) {
            let temp = Object.values(flatValues(data[i]));
            let temp2 = generateObj(columns, temp);
            result.push(temp2);
        }
        return result;
    }
    function generateObj(array, values) {
        let result = {};
        for (let i = 0; i < array.length; i++) {
            result = {...result, [array[i]]: values[i]};
        }
        return result;
    }

    return (
        <MaterialTable
            columns={ formatColumns(columns) }
            icons={ tableIcons }
            data={ formatRows(data) }
            title="Blotter"
            options={{
                filtering: true,
                exportButton: true,
                headerStyle: {
                    backgroundColor: '#039dfc'
                },
                cellStyle: {
                    fontSize: 8
                },
            }}
            onRowClick={
                (e, rowData) => {
                    onRowClick('Trade', { data: rowData })
                }
            }
        />
    )
};

export default Table;

