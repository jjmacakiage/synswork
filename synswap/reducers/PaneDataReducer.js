import { newPane, adminPane, readPane } from "../js/pane_data";

const INITIAL_STATE = { newPane: newPane, readPane: readPane, adminPane: adminPane };
export default function PaneDataReducer(state = INITIAL_STATE, action) {
    return {...state};
}
