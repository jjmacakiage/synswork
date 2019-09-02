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
            const uniq = [...new Set(trades)];
            if (uniq !== state.trades) {
                console.log('Trades Updated', state.trades[length - 1].id, uniq[length - 1].id);
                return { ...state, trades: uniq };
            }
            console.log('No New Trades');
            return { ...state };

        default:
            return { ...state };
    }
}

