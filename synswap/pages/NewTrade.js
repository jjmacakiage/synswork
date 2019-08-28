import React, {useEffect} from 'react'

import List from '../components/home/List';
import Header from '../components/main/Header';
import { Grid } from '@material-ui/core';
import NewTradeContent from '../components/newtrade/NewTradeContent';
import { useSelector } from "react-redux";
import fetchCounterpartyList  from '../utils/NewTrade/new_trade_util';
import { useDispatch } from "react-redux";

export default function NewTrade(props) {
    const fields = useSelector(state => state.NewTradeReducer.NEW_TRADE_FIELDS);
    const schema = useSelector(state => state.NewTradeReducer.schema);
    const validationFunctions = useSelector(state => state.NewTradeReducer.validationFunctions);
    const counterpartyList = useSelector(state => state.NewTradeReducer.counterpartyList);
    const currentUser = useSelector(state => state.AuthReducer.token);
    const trades_length = useSelector(state => state.TradeReducer.tradeStates).length;
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchList() {
            if (1 === 0) { //res.status === 'success') {
                const res = await fetchCounterpartyList(currentUser);
                dispatch({ type: 'CHANGE_COUNTERPARTYLIST', payload: res.counterpartyList });
            } else {
                return;
            }
        }
        fetchList();
    }, []);

    return (
        <div>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <Drawer
                        items={ ['Create New Trade', 'Go To Blotter']}
                        links={['NewTrade', 'Blotter']}
                        onClick={ props.onClick }
                        fields={ fields }
                        counterpartyList={ counterpartyList }
                        trades_length={ trades_length }
                        schema = { schema }
                        validationFunctions = { validationFunctions }
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function Drawer(props) {
    const { items, links, onClick } = props;
    const { fields, counterpartyList, trades_length, schema, validationFunctions } = props;
    return (
        <div style={{ display: 'flex', flexGrow: 1, justifyContent: "space-around"}}>
            <div style={{ maxWidth: "min-content", left: 0 }}>
                <List handleClose={() => {}} items={ items } links={ links } onClick={ onClick } />
            </div>
            <div style={{ padding: 15 }}>
                <NewTradeContent
                    fields={ fields }
                    counterpartyList={ counterpartyList }
                    trades_length={ trades_length }
                    schema = { schema }
                    validationFunctions = { validationFunctions }
                />
            </div>
        </div>
    )
}
