const INITIAL_STATE = {
    username: '',
    password: '',
    token: '',
};
export default function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return INITIAL_STATE;
        default:
            return { ...state };
    }
}
