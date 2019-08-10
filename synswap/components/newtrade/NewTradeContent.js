import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Tabs, Tab } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";

import NewTradeForm from './NewTradeForm';
import Form from './Form';
import CustomiseFields from './CustomiseFields';
import { createRows } from "../../utils/tradehelpers";
import { TabContainer } from "../../utils/tradehelpers";
import { fetchCounterpartyList } from '../../utils/NewTrade/new_trade_util';

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
 * @class NewTradeForm
 * @class CustomiseFields
 */

export default function NewTradeContent(props) {
    const classes = useStyles();
    const FIELDS = useSelector(state => state.NewTradeReducer.NEW_TRADE_FIELDS);
    const currentUser = useSelector(state.AuthReducer.token);
    const trades_length = useSelector(state => state.TradeReducer.tradeStates).length;
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const [counterpartyList, changeCounterpartyList] =
        useState(async () => {
            const res = await fetchCounterpartyList(currentUser);
            if (res.status === success) {
                return res.counterpartyList
            }
            else {
                return [];
            }
        });


    /**
     * @function handleSubmit
     * @param fields
     * takes fields passed in from NewTradeForm and appends to 'tradeStates' piece of state
     */
    function handleSubmit(fields) {
        const nameRemoved = fields.filter((value, index) => {
            return index !== fields.length - 1;
        });
        const payload = { id: trades_length, value: nameRemoved };
        dispatch({ type: 'NEW_TRADE', payload: payload });
    }


    /**
     * @function addFields
     * @param addFields
     * takes the custom fields created in CustomiseFields component and appends to NEW_TRADE_FIELDS piece of state
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
     * @type NewTradeForm
     * @type CustomiseFields
     */

    return (
        <div className={ classes.root }>
            <div>
                <Tabs
                    value={ value }
                    onChange={ tabChange }
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Edit" />
                    <Tab label="Autofill" />
                </Tabs>

                {
                    value === 0 &&
                    <TabContainer>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 6 }>
                                <NewTradeForm
                                    fieldList={ FIELDS }
                                    onSubmit={ handleSubmit.bind(this) }
                                    isDisabled={ false }
                                />
                            </Grid>
                            <Grid item xs={ 6 } >
                                <CustomiseFields className={ classes.customise } addFields={ addFields.bind(this) }/>
                            </Grid>
                        </Grid>
                    </TabContainer>
                }

                {
                    value === 1
                    &&
                    <TabContainer>
                        <Form
                            fields={ FIELDS }
                            initialValues={ FIELDS }
                            counterpartyList={ counterpartyList }/>
                    </TabContainer>
                }
            </div>
        </div>
    );
}

