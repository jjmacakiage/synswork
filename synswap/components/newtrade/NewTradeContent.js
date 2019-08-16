import React, { useState, useEffect } from 'react';
import {Button, Grid, makeStyles, Tabs, Tab, Select, TextField, InputLabel, Divider} from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";

import { TabContainer } from "../../utils/tradehelpers";
import {Eclipse} from "react-loading-io";
import {ErrorMessage, Field, Formik, Form} from "formik";
import LoadingOverlay from "react-loading-overlay";

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
    const { fields, counterpartyList, trades_length } = props;
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
     * @type Tab
     * @type Tabs
     * @type div
     */

    function handleCounterpartyChange(e) {
        changeCounterparty(e.target.value);
    }
    function createFormColumns(array) {
        return (
            <div className="col">
                <div className="row">
                    {
                        array.map((field, index) => {
                            if (field[1] !== 'select') {
                                return (
                                    <div>
                                        <Field name={field[0]}
                                               key={field[0]}
                                               render={() => (
                                                   <TextField label={field[0]}
                                                              disabled={counterparty === ''}
                                                              variant="outlined" type={ field[2] }
                                                   />
                                               )}
                                        />
                                        <ErrorMessage name={field[0]} />
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <Field name={field[0]}
                                           key={field[0]}
                                           render={() => (
                                               <div>
                                                   <InputLabel
                                                       htmlFor={field[0]}> {field[0]} </InputLabel>
                                                   <Select name={field[0]}>
                                                       <option value="DEFAULT"> Default</option>
                                                   </Select>
                                                   <ErrorMessage name={field[0]}/>
                                               </div>
                                           )}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <div className={ classes.root }>
            <div>
                <LoadingOverlay
                    active={ false }
                    spinner={ <Eclipse />}
                    styles={{
                        overlay: (base) => ({
                            ...base,
                            background: 'rgba(255, 255, 255, 0.1)'
                        })
                    }}
                >
                    <Formik
                        initialValues={ [] }
                        onSubmit={ (values, actions)=> {
                            changeLoading(true);
                            setTimeout(() => {
                                changeLoading(false);
                            }, 2000);
                            console.log(values);
                            actions.setSubmitting(false);
                        }}
                        enableReinitialize={ true }
                        /*onSubmit={(values, actions) => {
                            MyImaginaryRestApiCall(user.id, values).then(
                                updatedUser => {
                                    actions.setSubmitting(false);
                                    updateUser(updatedUser);
                                    onClose();
                                },
                                error => {
                                    actions.setSubmitting(false);
                                    actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                                    actions.setStatus({ msg: 'Set some arbitrary status or data' });
                                }
                            );
                        }}
                        */
                        validateOnBlur={ true }
                    >
                        {({ errors, touched, isValidating, isSubmitting }) => (
                            <Form>
                                <Select value={ counterparty } onChange={ e => handleCounterpartyChange(e) } >
                                    <option value=""> Select Counterparty </option>
                                    { counterpartyList.map((value, index) => {
                                        return (
                                            <option key={ value + index } value={ value }>
                                                {value}
                                            </option>
                                        );
                                    })}
                                </Select>
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
                                {
                                    () => {
                                        const extended = fields.filter((field) => {
                                            return field[2] === '1';
                                        });
                                        return (
                                            <div>
                                                { createFormColumns([extended[0]]) }
                                                { createFormColumns([extended[1], extended[2], extended[3]])}
                                                <Divider dark={ true } />
                                                { createFormColumns([extended[4]])}
                                                { createFormColumns([extended[5], extended[6]])}
                                                { createFormColumns([extended[7], extended[8], extended[9]])}
                                                { createFormColumns([extended[10], extended[11], extended[12]])}
                                                { createFormColumns([extended[13], extended[14], extended[15]])}
                                                <Divider dark={ true } />
                                                { createFormColumns([extended[16], extended[17]])}
                                                { createFormColumns([extended[18], extended[19], extended[20]])}
                                                { createFormColumns([extended[21], extended[22], extended[23]])}
                                            </div>
                                        )
                                    }
                                }
                                <Button variant="contained" type="submit" disabled={ isValidating || isSubmitting }> Submit </Button>
                            </Form>
                        )}
                    </Formik>

                </LoadingOverlay>
            </div>
        </div>
    );
}


