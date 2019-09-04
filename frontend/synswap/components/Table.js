import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

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
    const { data } = props;
    const columns = (!data.rows) ? pullStuff(data[0], 'keys') : data.columns;

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
        const doText = text => {
            const newText = text.replace(/([A-Z]+)/g, " $1");
            return newText.charAt(0).toUpperCase() + newText.slice(1)
        };
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
    function formatRows(rows) {
        let result = [];
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let temp = pullStuff(row, 'values');
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
    function pullStuff(obj, param) {
        const getKeys = obj => {
            if (typeof obj !== 'object') {
                throw new Error('Invalid JSON');
            }
            let result = [];
            const topKeys = Object.keys(obj);
            for (let i = 0; i < topKeys.length; i++) {
                let topKey = topKeys[i];
                let topEntry = obj[topKey];
                if (typeof topEntry === 'string' || typeof topEntry === 'number') {
                    result.push(topKey);
                }
                else if (Array.isArray(topEntry)) {
                    let arrayEntry;
                    for (arrayEntry in topEntry) {
                        result.push(getKeys(arrayEntry, true));
                    }
                }
                else {
                    result.push(getKeys(topEntry))
                }
            }
            return result.flat(Infinity);
        };

        const getValues = obj => {
            if (typeof obj !== 'object') {
                throw new Error('Invalid JSON');
            }
            let result = [];
            let topValues = Object.values(obj);
            for (let i = 0; i < topValues.length; i++) {
                let topValue = topValues[i];
                if (typeof topValue === 'string' || typeof topValue === 'number') {
                    result.push(topValue);
                }
                else if (Array.isArray(topValue)) {
                    let arrayEntry;
                    for (arrayEntry in topValue) {
                        result.push(getValues(arrayEntry, true));
                    }
                }
                else {
                    result.push(getValues(topValue))
                }
            }
            return result.flat(Infinity);
        };
        switch (param) {
            case 'keys':
                return getKeys(obj, false);
            case 'values':
                return getValues(obj, false);
            default:
                return;
        }
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
                }
            }}
        />
    )
};

export default Table;

