const INITIAL_STATE = {
    trades: []
};

export default function TradeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INITIAL_FETCH':
            (action.payload.length !== 0) ? console.log('Initial Fetch Done') : null;
            return { ...state, trades: action.payload };
        case 'NEW_TRADE':
            const new_trade_result = [...state.trades];
            new_trade_result.push(action.payload);
            return { ...state, trades: new_trade_result };
        case 'FETCH_TRADES':
            const trades = [...state.trades];
            trades.push(action.payload);
            console.log(trades);
            return { ...state, trades: trades };
        default:
            return { ...state };
    }
}

