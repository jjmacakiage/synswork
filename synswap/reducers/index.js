import { combineReducers } from "redux";
import TabReducer from './TabReducer';
import PaneDataReducer from './PaneDataReducer';
import NewTradeReducer from './NewTradeReducer';
import TradeReducer from './TradeReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    TabReducer,
    PaneDataReducer,
    NewTradeReducer,
    TradeReducer,
    AuthReducer
})

