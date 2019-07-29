import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import Tabs, {Tab} from "react-awesome-tabs";
import "../resources/styles/react-awesome-tabs.scss";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'


import Header from "../components/Header";
import Home from './Home';
import NewTrade from './NewTrade';
import Trade from './Trade';
import Blotter from './Blotter';
import {error} from "next/dist/build/output/log";
import { withAuthSync } from "../utils/auth";
import getHost from '../utils/get-host'

/**
 * @class Main
 * @constructor
 * Contains all the navigation functions, including the <Tabs /> and their functions (dispatched to reducers/TabReducer)
 * Dependencies used:
    * @react-awesome-tabs for the <Tabs> and <Tab> components, react-awesome-tabs.scss for styling (comes with module)
    * @material-ui for <Grid />
    * @react-redux for useDispatch and useSelector
 * Custom Components used:
    * @class NewTrade - New Trade page
    * @class Home - Home page
    * @class Trade - Trade page
    * @class Header - Header
 */
export default function Main() {
    /**
     * @constant activeTab
     * @type {object}
     * a number that represents the activeTab piece of state
     */
    const activeTab = useSelector(state => state.TabReducer.activeTab);

    /**
     * @var tabs
     * @type {object}
     * an array of objects representing the tabs, with each object in the format { title, index, component }
     */
    const tabs = useSelector(state => state.TabReducer.tabs);

    /**
     * @constant dispatch
     * @type {function}
     * gives access to dispatch function from Redux store
     */
    const dispatch = useDispatch();

    /**
     * @constant tradeProps
     * receives data from addNewTrade function and updates the most recent TradeProps
     */
    const [tradeProps, changeProps] = useState({ data: { columns: [], rows: [] }});

    /**
     * @constant showTextField
     * receives data from handleClick function and toggles the Trade ID popup
     */

    const [showTradeSearch, toggleShow] = useState(false);
    /**
     * @constant MAIN_TABS
     * @type {array}
     * array of objects that contains a 'key' and a 'component' that is mapped to the 'component' attribute from a tab object in
     * @function matchLink
     */
    const MAIN_TABS = [
        { key: 'Home', component: <Home onClick={ handleClick.bind(this) } showTextField={ showTradeSearch }/>},
        { key: 'NewTrade', component: <NewTrade addNewTrade={ addNewTrade } />},
        { key: 'Trade', component: Trade(tradeProps)},
        { key: 'Blotter', component: <Blotter />}
    ];

    /**
     * @function matchLink
     * @type string
     * @param link
     * helper function that receives a link {string} from an option in the <HomePane />'s (child components of <Home />) and
     * matches it to a 'component' in the MAIN_TABS array via the 'key'
     */
    function matchLink(link) {
        for (let i = 0; i < MAIN_TABS.length; i++) {
            const data = MAIN_TABS[i];
            if (link === data.key) {
                return i;
            }
        }
        return new error('Component Not Found');
    }


    /**
     * @function handleTabSwitch
     * @type dispatch
     * @param active
     * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
     */
    function handleTabSwitch(active) {
        dispatch({ type: 'SWITCH_TAB', payload: active});
    }

    /**
     * @function handleTabPositionChange
     * @type dispatch
     * @param a
     * @param b
     * eventHandler helper function that takes the two tabs to be switched around, switches their indices,...
     * ...and changes the new active tab
     */
    function handleTabPositionChange(a, b) {
        let c = tabs[a];
        tabs[a] = tabs[b];
        tabs[b] = c;

        if(activeTab === a) {
            dispatch({ type: 'SWITCH_TAB', activeTab: b });
        }else if(activeTab === b) {
            dispatch({ type: 'SWITCH_TAB', activeTab: a });
        }

    }

    /**
     * @function handleTabClose
     * @type dispatch
     * @param index
     * eventHandler helper function that takes the closed tab and pops it from 'tabs' piece of state
     */
    function handleTabClose(index) {
        dispatch({ type: 'REMOVE_TAB', payload: index });
    }


    /**
     * @function handleClick
     * @param link
     * eventHandler helper function that takes the link as a param and returns a component number from matchLink()...
     * ...then dispatches a new tab object containing a title, index, and component keys to be appended to 'tabs'...
     * ...piece of state
     */

    function handleClick(link) {
        if (link !== 'TradeSearch') {
            let component = matchLink(link);
            /*for (let i = 0; i < tabs.length; i++) {
                console.log('start loop');
                let tab = tabs[i];
                if (tab.component === component) {
                    const NEW_TABS = [...MAIN_TABS];
                    NEW_TABS.push({
                        key: tab.title + MAIN_TABS.length + 1,
                        component: MAIN_TABS[tab.component].component
                    });
                    changeTabs(NEW_TABS);
                    component = MAIN_TABS.length - 1;
                    const newTabContent = {
                        title: link,
                        index: tabs.length,
                        component: component
                    };
                    dispatch({ type: 'ADD_TAB', payload: newTabContent });
                    return;
                }
            }
            console.log('no duplicate');
            */

            const newTabContent = {
                title: link,
                index: tabs.length,
                component: component
            };
            dispatch({type: 'ADD_TAB', payload: newTabContent});
        }
        else {
            toggleShow(true);
        }
    }

    function addNewTrade(name, fields, values) {
        const newTradeContent = {
            title: name,
            index: tabs.length,
            component: matchLink('Trade'),
            fields: fields,
            values: values
        };
        dispatch({ type: 'ADD_TAB', payload: newTradeContent });
        changeProps({ data: { columns: fields, rows: values } })
    }
    /**
     * @return
     * @type Grid
     * @type Header
     * @type Tabs
     * @type Tab
     * @type MAIN_TABS[component]
     */

    return (
        <Grid container spacing={ 0 }>
            <Grid item xs={ 12 }>
                <Header />
            </Grid>
            <Grid item xs={ 12 }>
                <Tabs
                    active={ activeTab }
                    onTabSwitch={ handleTabSwitch.bind(this) }
                    onTabPositionChange={ handleTabPositionChange.bind(this) }
                    onTabClose={ handleTabClose.bind(this) }
                    draggable={ true }
                    showAdd={ false }
                >
                    {
                        //maps 'tabs' piece of state to a <Tab> component, changes when 'tabs' changes
                        tabs.map((value, index) => {
                            return (
                                <Tab
                                    key={ value.title + index }
                                    title={ value.title }
                                    showClose={ index !== 0 }
                                >
                                    { MAIN_TABS[ value.component ].component }
                                </Tab>
                            );
                        })
                    }
                </Tabs>
            </Grid>
        </Grid>
    );
}

Main.getInitialProps = async ctx => {
    const { token } = nextCookie(ctx);
    const apiUrl = getHost(ctx.req) + '/api/profile';

    const redirectOnError = () =>
        typeof window !== 'undefined'
            ? Router.push('/Login')
            : ctx.res.writeHead(302, { Location: '/Login' }).end();

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include',
            headers: {
                Authorization: JSON.stringify({ token })
            }
        })

        if (response.ok) {
            const js = await response.json()
            console.log('js', js)
            return js
        } else {
            // https://github.com/developit/unfetch#caveats
            return await redirectOnError()
        }
    } catch (error) {
        // Implementation or Network error
        return redirectOnError()
    }
}

