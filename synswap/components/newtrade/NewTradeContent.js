import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import {Button, Grid, makeStyles, Tabs, Tab, Select, TextField, MenuItem, Divider, Typography} from '@material-ui/core';
import {Eclipse} from "react-loading-io";
import {ErrorMessage, Field, Formik, Form} from "formik";
import LoadingOverlay from "react-loading-overlay";

import { TabContainer } from "../../utils/tradehelpers";



/**
 * @constant useStyles
 * hook used for styling
 */
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    customise: {
        marginTop: 20
    }
}));

/**
 * @class NewTradeContent
 * Contains the forms for creating a NewTrade
 * Dependencies used:
 * @material-ui for Grid, makeStyles, Tabs, Tab, Typography
 * Custom Components used:
 * @class NewTradeContent
 */

export default function NewTradeContent(props) {
    const classes = useStyles();
    const { fields, counterpartyList, trades_length, schema, validationFunctions } = props;
    const { IRS } = schema;
    const [isLoading, changeLoading] = useState(false);
    const [counterparty, changeCounterparty] = useState('');
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const irsSchema = (values) => {
        const generateSchema = (object, values) => {
            let keys = Object.keys(object);
            let valueCount = 0;
            let result = {};
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                let obj = object[key];
                if (typeof obj === 'string' || typeof obj === 'number') {
                    result = { ...result, [key]: values[valueCount]};
                    valueCount++;
                }
                else {
                    result = { ...result, [key]: generateSchema(obj, values.slice(valueCount, valueCount + Object.keys(object).length))};
                    valueCount = valueCount + Object.keys(object).length
                }
            }
            return result;
        };
        return generateSchema(IRS, values)
    };

    /**
     * @function handleSubmit
     * @param values
     * takes fields passed in from the form and sends to api
     */
    const handleSubmit = async values => {
        const url = 'http://localhost:4000/api/parties/trades';
        //console.log(values);
        const data = values //irsSchema(Object.values(values));
        try {
            axios.post(url, {
                data
            })
                .then(function (response) {
                    if (response.status === 200) {
                        console.log(response);
                        dispatch({ type: 'NEW_TRADE', payload: [response.data.data, values] });
                        return response.data;
                    } else {
                        console.log('Trade register failed.', response.status);
                        let error = new Error(response.statusText);
                        error.response = response;
                        throw error
                    }
                });
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );
            return error;
        }
    };

    /**
     * @function addFields
     * @param addFields
     * takes the custom fields created in component and appends to NEW_TRADE_FIELDS piece of state
     */
    function addFields(addFields) {
        dispatch({ type: 'APPEND_FIELDS', payload: addFields });
    }

    /**
     * @function tabChange
     * @param e
     * @param newValue
     * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
     */
    function tabChange(e, newValue) {
        setValue(newValue);
    }

    function generateInitial(array, values) {
        let result = {};
        for (let i = 0; i < array.length; i++) {
            result = {...result, [array[i][0]]: values[i]};
        }
        return result;
    }
    function handleCounterpartyChange(e) {
        changeCounterparty(e.target.value);
    }
    function createFormColumns(array) {
        return (
            <>
            {
                array.map((value, index) => {
                    if (value[1] !== 'select') {
                        return (
                            <Grid item xs={ 4 }>
                                <Field name={value[0]}
                                       key={value[0]}
                                       type={ value[1] }
                                       render={({ field, form: { isSubmitting } }) => (
                                           <TextField {...field} label={ (value[1] === 'date') ? '' : value[0]}
                                                      disabled={counterparty === '' || isSubmitting}
                                                      variant="outlined" type={ value[1]}
                                                      helperText={ (value[1] === 'date') ? value[0] : ''}
                                           />
                                       )}
                                />
                                <ErrorMessage name={value[0]} component="div"/>
                            </Grid>
                        );
                    }
                    else {
                        return (
                            <Grid item xs={ 4 }>
                                <Field name={value[0]}
                                       key={value[0]}
                                       render= {
                                           ({ field, form: { isSubmitting } }) => (
                                                <TextField
                                                    select
                                                    disabled={counterparty === '' || isSubmitting}
                                                    variant="outlined"
                                                    style={{ width: '100%' }}
                                                    value={ value[0] }
                                                    SelectProps={{
                                                        native: true,
                                                        ...field
                                                    }}
                                                >
                                                        <option disabled> { value[0] } </option>
                                                    {
                                                        value[3].map((option, index) => {
                                                            return (
                                                                <option key={option + index} value={option} >
                                                                    {option}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </TextField>
                                           )
                                       }
                                />
                                    <ErrorMessage name={value[0]} component="div"/>
                            </Grid>
                        )
                    }
                })
            }
            </>
        )
    }
    function extendedFields() {
        const extended = fields.filter((field) => {
            return field[2] === '1';
        });
        const returnExtended = i => {
            return extended[i];
        };
        return (
            <Grid container spacing={ 2 }>
                {
                    [[0], [1,2,3], [4,5,6], [7,8], [9,10,11], [12,13,14], [15,16,17], [18,19]].map((value, index) => {
                        const temp = [];
                        for (let i = 0; i < value.length; i++) {
                            temp.push(returnExtended(value[i]));
                        }
                        return (
                            <Grid item xs={ 12 }>
                                { (index === 0 || index === 5) ?
                                    <Typography variant="overline" style={{ marginBottom: 20 }}>
                                        {index === 0 ? "Floating Leg" : "Fixed Leg"}
                                    </Typography>
                                    : null
                                }
                                <Grid container spacing={ 2 }>
                                    { createFormColumns(temp) }
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
    }

    /**
     * @return
     * @type Grid
     * @type TabContainer
     * @type div
     */
    return (
        <div className={ classes.root }>
            <div>
                <Typography variant="overline" style={{ marginBottom: 20 }}> { (counterparty === '') ? 'New Trade' : counterparty }</Typography>
                <LoadingOverlay
                    active={ isLoading }
                    spinner={ <Eclipse />}
                    styles={{
                        overlay: (base) => ({
                            ...base,
                            background: 'rgba(255, 255, 255, 0.1)'
                        })
                    }}
                >
                    <Formik
                        initialValues={generateInitial(fields, new Array(fields.length).fill(''))}
                        enableReinitialize={ true }
                        onSubmit={(values, actions) => {
                            //console.log(irsSchema(Object.values(values)));
                            handleSubmit(IRS, values);
                            actions.setSubmitting(false)
                        }}
                        validateOnBlur={ true }
                        render={({ errors, status, touched, isSubmitting, isValidating }) => (
                            <Form>
                                <TextField
                                    select
                                    label="Select Counterparty"
                                    disabled={isSubmitting}
                                    variant="outlined" type={ value[1] }
                                    value={ counterparty }
                                    onChange={ e => handleCounterpartyChange(e) }
                                    style={{ width: '100%', marginBottom: 20 }}
                                >
                                    { counterpartyList.map((value, index) => {
                                        return (
                                            <MenuItem key={ value + index } value={ value }>
                                                {value}
                                            </MenuItem>
                                        );
                                    })}
                                </TextField>
                                <Grid container spacing={ 2 }>
                                {
                                    fields.map((field, index) => {
                                        if (field[2] === '0') {
                                            return (
                                                <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }}>
                                                    {createFormColumns([field])}
                                                </Grid>
                                            )
                                        }
                                    })
                                }
                                </Grid>
                                <div style={{ marginTop: 20, marginBottom: 20 }}>
                                    <Divider />
                                </div>
                                { extendedFields() }
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={ isValidating || isSubmitting || counterparty === ''}
                                    style={{ marginTop: 20 }}
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    />
                </LoadingOverlay>
            </div>
        </div>
    );
}


