import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Button, Grid, makeStyles, Tabs, Tab, Select, TextField, MenuItem, Divider, Typography} from '@material-ui/core';
import {Eclipse} from "react-loading-io";
import {ErrorMessage, Field, Formik, Form} from "formik";
import LoadingOverlay from "react-loading-overlay";



import { TabContainer } from "../../utils/tradehelpers";
import { extractByKey } from "../../js/new_trade_fields";


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
    const [isLoading, changeLoading] = useState(false);
    const [counterparty, changeCounterparty] = useState('');
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);


    /**
     * @function handleSubmit
     * @param result
     * takes fields passed in from the form and appends to 'tradeStates' piece of state
     */
    function handleSubmit(result) {
        const nameRemoved = result.filter((value, index) => {
            return index !== result.length - 1;
        });
        const payload = { id: trades_length, value: nameRemoved };
        dispatch({ type: 'NEW_TRADE', payload: payload });
    }


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

    /**
     * @return
     * @type Grid
     * @type TabContainer
     * @type div
     */

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
                                                      variant="outlined" type={ value[1] }
                                           />
                                       )}
                                />
                                <ErrorMessage name={value[0]} />
                            </Grid>
                        );
                    }
                    else {
                        return (
                            <Grid item xs={ 4 }>
                                <Field name={value[0]}
                                       key={value[0]}
                                       render= {({ field, form: { isSubmitting } }) => (
                                                <div>
                                                    <TextField
                                                        select
                                                        label={ value[0] }
                                                        disabled={counterparty === '' || isSubmitting}
                                                        variant="outlined"
                                                        type={ value[1] }
                                                        style={{ width: '100%' }}
                                                    >
                                                        <MenuItem>
                                                            Default
                                                        </MenuItem>
                                                    </TextField>
                                                    <ErrorMessage name={value[0]}/>
                                               </div>
                                            )
                                       }
                                />
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
                    [[0], [1,2,3], [4], [5,6], [7,8,9], [10,11,12], [13,14,15], [16,17], [18,19,20], [21,22,23]].map((value, index) => {
                        const temp = [];
                        for (let i = 0; i < value.length; i++) {
                            temp.push(returnExtended(value[i]));
                        }
                        return (
                            <Grid item xs={ 12 }>
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

    return (
        <div className={ classes.root }>
            <div>
                <Typography variant="overline"> New Trade </Typography>
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
                        initialValues={ () => {
                            return fields.map(field => {
                                return field[0];
                            })
                        } }
                        enableReinitialize={ true }
                        onSubmit={(values, actions) => {
                            const extractByKey = validationFunctions[0];
                            console.log(values);
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
                                    disabled={ isValidating || isSubmitting }
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


