const INITIAL_STATE = {
    tradeStates: []
};

export default function TradeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'NEW_TRADE':
            const new_trade_result = [...state.tradeStates];
            new_trade_result.push(action.payload);
            return { ...state, tradeStates: new_trade_result };
        default:
            return { ...state };
    }
}

