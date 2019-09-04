import { new_trade_fields, IRS } from '../js/new_trade_fields';

const INITIAL_STATE = {
    NEW_TRADE_FIELDS: new_trade_fields(),
    schema: { IRS },
    counterpartyList: [],
};
export default function NewTradeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'APPEND_FIELDS':
            const result = state.NEW_TRADE_FIELDS.concat(action.payload);
            return { ...state, NEW_TRADE_FIELDS: result };
        case 'CHANGE_COUNTERPARTYLIST':
            return { ...state, counterpartyList: action.payload };
        default:
            return { ...state };
    }
}
