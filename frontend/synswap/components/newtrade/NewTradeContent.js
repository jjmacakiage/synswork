import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Button, Grid, makeStyles, Tabs, Tab, TextField, MenuItem, Divider, Typography} from '@material-ui/core';
import {ErrorMessage, Field, Formik, Form} from "formik";


import { TabPanel, a11yProps } from "../trade/Helpers";
import { tradeSchema, generateInitial, handleSubmit } from "../../js/tradehelpers";

/**
 * @constant useStylesp
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
    const { fields, counterpartyList, schema } = props;
    const { IRS } = schema;
    const [isLoading, changeLoading] = useState(false);
    const [counterparty, changeCounterparty] = useState('');
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);


    function onSubmit(values) {
        return handleSubmit({ schema: IRS, values, dispatch });
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
                                           ({ field, form: { isSubmitting }, ...props }) => {
                                               return (
                                                   <TextField
                                                       select
                                                       disabled={counterparty === '' || isSubmitting}
                                                       variant="outlined"
                                                       style={{ width: '100%' }}
                                                       SelectProps={{
                                                           native: true,
                                                       }}
                                                       { ...field }
                                                       { ...props }
                                                   >
                                                       <option> { value[0] } </option>
                                                       {
                                                           value[3].map(option => {
                                                               return (
                                                                   <option key={option} value={option}>
                                                                       {option}
                                                                   </option>
                                                               )
                                                           })
                                                       }
                                                   </TextField>
                                               );
                                           }
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
                    [[0], [1,2,3], [4], [5,6], [7,8,9], [10,11,12], [13,14,15], [16,17], [18,19,20], [21,22,23]].map((value, index) => {
                        const temp = [];
                        for (let i = 0; i < value.length; i++) {
                            temp.push(returnExtended(value[i]));
                        }
                        return (
                            <Grid item xs={ 12 } key={ value + index}>
                                { (index === 2 || index === 7) ?
                                    (
                                        <div style={{ marginTop: 20, marginBottom: 20 }}>
                                            <Typography variant="overline" style={{ marginBottom: 20 }}>
                                                {index === 2 ? "Floating Leg" : "Fixed Leg"}
                                            </Typography>
                                            <Divider dark />
                                        </div>
                                    )
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
                <Tabs value={value} onChange={tabChange} centered >
                    <Tab label="Main" {...a11yProps(0)} />
                    <Tab label="Details" {...a11yProps(1)} />
                </Tabs>
                <Formik
                    initialValues={ generateInitial(fields, new Array(fields.length).fill('')) }
                    enableReinitialize={ true }
                    onSubmit={(values, actions) => {
                        onSubmit(tradeSchema(IRS, Object.values(values)));
                        actions.setSubmitting(false)
                    }}
                    validateOnBlur={ true }
                    render={({ errors, status, touched, isSubmitting, isValidating }) => (
                        <Form>
                            <TabPanel value={value} index={0}>
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
                                                    <Grid item xs={ 6 } style={{ marginTop: 2, marginBottom: 2 }} key={ field + index}>
                                                        {createFormColumns([field])}
                                                    </Grid>
                                                )
                                            }
                                        })
                                    }
                                </Grid>
                            </TabPanel>
                            <TabPanel index={1} value={value}>
                                { extendedFields() }
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={ isValidating || isSubmitting || counterparty === ''}
                                    style={{ marginTop: 20 }}
                                >
                                    Submit
                                </Button>
                            </TabPanel>
                        </Form>
                    )}
                />
            </div>
        </div>
    );
}


