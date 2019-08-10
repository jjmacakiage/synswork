import { new_trade_fields } from '../js/new_trade_fields';

const INITIAL_STATE = {
    tabs: [],
    NEW_TRADE_FIELDS: new_trade_fields,
    AUTOFILL_FIELDS: [],
    FIELD_DATA: [],
    validationSchema: {}, // || API CALL TO OBTAIN DEFAULT SCHEMA
    validationFunctions: [],
    counterpartyList: [],
    currentCounterparty: ''
};
export default function NewTradeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'APPEND_FIELDS':
            const result = state.NEW_TRADE_FIELDS.concat(action.payload);
            return { ...state, NEW_TRADE_FIELDS: result };
        case 'CHANGE_COUNTERPARTY':
            return { ...state, currentCounterparty: action.payload };
        default:
            return { ...state };
    }
}
