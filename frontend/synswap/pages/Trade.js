import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {Tab, Tabs, TextField, Grid, Typography, Button} from "@material-ui/core";
import { Form, Formik, Field } from 'formik';
import BestMatch from '../components/trade/BestMatch';
import { TabPanel, a11yProps } from "../components/trade/Helpers";
import {generateInitial, tradeSchema, isDate, formatDates, formatTradePanes } from "../js/tradehelpers";

export default function Trade(props) {
    /**
     * @constant data
     * Display data received from Blotter
     */
    /**
     * @constant json
     * Trade object (nested json) from api
     */
    const { data, json } = props;

    /**
     * @constant schema
     * Schema used to do verification and formatting after editing trade
     * @type {any}
     */
    const schema = useSelector(state => state.NewTradeReducer.schema);

    /**
     * @constant IRS
     * IRS Schema
     */
    const { IRS } = schema;

    /**
     * @constant value
     * piece of local state used for tabination
     */
    const [value, setValue] = useState(0);

    /**
     * @constant score
     * piece of local state for best match score
     * should be set by the matching score received from the trade
     */
    const [score, setScore] = useState(0);

    /**
     * @constant isEditable
     * piece of local state used to change whether the fields are disabled or not
     */
    const [isEditable, toggleEditable] = useState(false);

    /**
     * @function tabChange
     * @param e
     * @param newValue
     * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
     */
    const tabChange = (e, newValue) => {
        setValue(newValue);
    };

    /**
     * @constant BEST_MATCH_TITLE
     * Title for the Best Match Score Tab
     * takes the 'score' variable as a param
     */
    const BEST_MATCH_TITLE = 'Best Match Score: ' + score + '%';

    /**
     * @constant generateForm
     * Creates the form that displays the current trade
     */
    const generateForm = () => {
        /**
         * @constant nonEditable
         * List of keys received in data as props
         * that shouldnt be included on the form
         */
        const nonEditable = ['tableData', 'Counter Party Id', 'Status', 'Blocknumber', 'Trade Id', 'Party Id', 'Trade Date'];

        /**
         * @constant main
         * Fields for the 'main' tab
         */

        /**
         * @constant details
         * Fields for the 'details' tab
         */
        const { main, details } = formatTradePanes(data, ['Fixed', 'Floating'], nonEditable);

        /**
         * @constant generateMain
         * Creates the Main tab
         * By mapping the main constant to Field Components
         */
        const generateMain = () => {
            return (
                <Grid container spacing={ 2 }>
                    {
                        main.map(value => {
                            return (
                                <Grid item xs={6} style={{ marginTop: 3, marginBottom: 2}}>
                                    <Field name={ value[0] }
                                           key={value[0]}
                                           render={({ field }) => (
                                               <TextField {...field}
                                                          disabled={!isEditable}
                                                          variant="outlined"
                                                          helperText={ value[0] }
                                                          type={
                                                              isDate(value[1]
                                                                  ? 'date'
                                                                  : 'text')
                                                          }
                                               />
                                           )}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            )
        };

        /**
         * @constant generateDetails
         * Creates the Details tab
         * By mapping the details constant to Field Components
         */
        const generateDetails = () => {
            return (
                <Grid container spacing={ 3 }>
                    {
                        [[0], [1], [2,3,4], [5,6,7], [8,9], [10,11,12], [13,14,15], [16,17,18], [19,20]].map((value, index) => {
                            const temp = [];
                            for (let i = 0; i < value.length; i++) {
                                temp.push(details[value[i]]);
                            }
                            return (
                                <Grid item xs={ 12 } key={ value + index}>
                                    <Grid container spacing={ 2 }>
                                        {
                                            temp.map(val => {
                                                return (
                                                    <Grid item xs={ 4 }>
                                                        <Field name={ val[0] }
                                                               key={val[0]}
                                                               render={({ field }) => (
                                                                   <TextField {...field} helperText={ val[0] }
                                                                              disabled={!isEditable}
                                                                              variant="outlined"
                                                                              type={ isDate(val[1]) ? 'date' : 'text'}
                                                                   />
                                                               )}
                                                        />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            )
        };

        /**
         * @return
         * @type Formik
         * @type Form
         * @type TabPanel
         */
        return (
            <Formik
                initialValues={ formatDates(data) }
                onSubmit={({ values, actions }) => { console.log(values) }}
            >
                <Form>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={ 4 }>
                            <Grid item xs={6}>
                                <Grid container spacing={ 2 }>
                                    <Grid item xs={ 12 }>
                                        <Typography variant="overline"> Status: { json.status } </Typography>
                                    </Grid>
                                    <Grid item xs={ 12 }>
                                        <Typography variant="overline"> Party: {  json.partyId } </Typography>
                                    </Grid>
                                    <Grid item xs={ 12 }>
                                        <Typography variant="overline"> Counterparty: { json.counterPartyId } </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={ 2 }>
                                    <Grid item xs={ 12 }>
                                        <Typography variant="overline"> Blocknumber: {  json.blocknumber} </Typography>
                                    </Grid>
                                    <Grid item xs={ 12 }>
                                        <Typography variant="overline"> Trade ID: { json.tradeId } </Typography>
                                    </Grid>
                                    <Grid item xs={ 12 }>
                                        <Typography variant="overline"> Trade Date: {  json.tradeDate.substring(0,10) } </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 }>
                                <Button
                                    variant="contained"
                                    onClick={ () => { (isEditable ? toggleEditable(false) : toggleEditable(true) ) } }
                                    type={ isEditable === true ? "submit" : null }
                                    style={{ marginTop: 20 }}
                                >
                                    { isEditable === true ? <Typography variant="overline"> Save Changes </Typography> : <Typography variant="overline"> Edit </Typography>}
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 }>
                                { generateMain() }
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel index={ 2 } value={ value }>
                        { generateDetails() }
                    </TabPanel>
                </Form>
            </Formik>
        )
    };
    /**
     * @return
     * @type Tabs
     * @type Grid
     * @type TabPanel
     */
    return (
        <div>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <div>
                        <Tabs
                            value={value}
                            onChange={tabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Details" {...a11yProps(0)} />
                            <Tab label="Main Fields" {...a11yProps(1)} />
                            <Tab label="Secondary Fields" {...a11yProps(2)} />
                            <Tab label="Cashflow Schedule" {...a11yProps(3)} />
                            <Tab label="Confirmation" {...a11yProps(4)} />
                            <Tab label={ BEST_MATCH_TITLE } {...a11yProps(5)} />

                        </Tabs>

                        { generateForm() }

                        <TabPanel value={value} index={3}>
                            <Typography variant="overline"> Cashflow Schedule </Typography>
                        </TabPanel>

                        <TabPanel value={value} index={4}>
                            Confirmation
                        </TabPanel>

                        <TabPanel index={5} value={value}>
                            { /*<BestMatch score={ score }/> */}
                        </TabPanel>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

