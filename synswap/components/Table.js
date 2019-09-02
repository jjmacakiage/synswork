import React, {useEffect, useState} from 'react';
import { MultiGrid, AutoSizer } from 'react-virtualized';
import { Paper, Typography } from '@material-ui/core';

export default function Table(props) {
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

    const formatData = data => {
        const columns = pullStuff(data[0], 'keys');
        const result = [];
        result.push(columns);
        for (let i = 0; i < data.length; i++) {
            result.push(pullStuff(data[i], 'values'))
        }
        return result;
    };

    const data = formatData(props.data);

    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        return (
            <Paper
                key={ key }
                style={ {...style, padding: 5, minWidth: "min-content" } }
                square
            >
                <Typography variant="overline"> { data[rowIndex][columnIndex] } </Typography>
            </Paper>
        )
    };

    return (
        <MultiGrid
            cellRenderer={cellRenderer}
            columnCount={data[0].length}
            columnWidth={ 5000 / data[0].length }
            fixedColumnCount={ 0 }
            fixedRowCount={ 1 }
            height={ 600 }
            rowCount={data.length}
            rowHeight={30}
            width={ 1200 }
            style={{ marginLeft: 20 }}
        />

    )
}
