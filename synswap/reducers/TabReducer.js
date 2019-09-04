import React from "react";

const INITIAL_STATE = { tabs: [
        {
            title: 'Home',
            index: 0,
            component: 0,
            key: 'Home'
        },
    ],
    activeTab: 0
};
export default function TabReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SWITCH_TAB':
            return { ...state, activeTab: action.payload };
        case 'ADD_TAB':
            const newTabs = [...state.tabs];
            newTabs.push(action.payload);
            return { ...state, tabs: newTabs, activeTab: newTabs.length - 1 };
        case 'REMOVE_TAB':
            const remainingTabs = state.tabs.filter((value, index) => {
                return index !== action.payload;
            });
            if(state.activeTab >= remainingTabs.length) {
                return { ...state, tabs: remainingTabs, activeTab: remainingTabs.length - 1};
            }
            return { ...state, tabs: remainingTabs };
        default:
            return { ...state };
    }
}
