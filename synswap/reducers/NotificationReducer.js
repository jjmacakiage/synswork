const INITIAL_STATE = {
    notifications: [],
};

export default function NotificationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_NOTIFICATIONS':
            const notifications = [...state.notifications];
            notifications.push(...action.payload);
            return { ...state, notifications: notifications};
        default:
            return { ...state };
    }
}

