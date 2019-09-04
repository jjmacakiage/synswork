const INITIAL_STATE = {
    trades: [],
    blocknumber: 0
};

export default function TradeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INITIAL_FETCH':
            (action.payload.trades.length) ? console.log('Initial Fetch Done', action.payload.trades.length) : null;
            return { ...state, trades: action.payload.trades, blocknumber: (action.payload.blocknumber
                    ? action.payload.blocknumber : state.blocknumber)};
        case 'NEW_TRADE':
            const new_trade_result = [...state.trades];
            new_trade_result.push(action.payload);
            return { ...state, trades: new_trade_result };
        case 'FETCH_TRADES':
            const trades = [...state.trades];
            trades.concat([...action.payload.trades]);
            const uniq = [...new Set(trades)];
            if (uniq !== state.trades) {
                return { ...state, trades: uniq, blocknumber: action.payload.blocknumber };
            }
            console.log('No New Trades');
            return { ...state };

        default:
            return { ...state };
    }
}