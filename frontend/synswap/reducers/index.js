import { combineReducers } from "redux";
import TabReducer from './TabReducer';
import PaneDataReducer from './PaneDataReducer';
import NewTradeReducer from './NewTradeReducer';
import TradeReducer from './TradeReducer';
import AuthReducer from './AuthReducer';
import NotificationReducer from './NotificationReducer';

export default combineReducers({
    TabReducer,
    PaneDataReducer,
    NewTradeReducer,
    TradeReducer,
    AuthReducer,
    NotificationReducer
})

