import React, {useState, useEffect} from "react";
import axios from "axios";
import { Grid } from '@material-ui/core';
import Tabs, {Tab} from "react-awesome-tabs";
import "../resources/styles/react-awesome-tabs.scss";
import { useDispatch, useSelector } from "react-redux";
import nextCookie from 'next-cookies';
import Router from 'next/router';

import Header from "../components/main/Header";
import Home from './Home';
import NewTrade from './NewTrade';
import Trade from './Trade';
import Blotter from './Blotter';
import FileUpload from './FileUpload';
import {error} from "next/dist/build/output/log";
import { withAuthSync } from '../utils/Auth/auth';
import getHost from '../utils/Auth/get-host';
import { fetchTrades, initialFetch } from "../js/tradehelpers";

/**
 * @class Main
 * @constructor
 * Contains all the navigation functions, including the <Tabs /> and their functions (dispatched to reducers/TabReducer)
 * Dependencies used:
 * @react-awesome-tabs for the <Tabs> and <Tab> components, react-awesome-tabs.scss for styling (comes with module)
 * @material-ui for <Grid />
 * @react-redux for useDispatch and useSelector
 * Custom Components used:
 * @class NewTradeContent - New Trade page
 * @class Home - Home page
 * @class Trade - Trade page
 * @class Header - Header
 */

const Main = () => {
    const blocknumber = useSelector(state => state.TradeReducer.blocknumber);
    const notifications = useSelector(state => state.NotificationReducer.notifications);
    /**
     * @constant dispatch
     * @type {function}
     * gives access to dispatch function from Redux store
     */
    const dispatch = useDispatch();

    const [initFetchDone, setInitFetchDone] = useState(false);
    useEffect(() => {
        initialFetch(dispatch);
        setInitFetchDone(true);
    },[]);

    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setRefresh(refresh => !refresh);
        }, 1000);
        return (
            () => {
                console.log('Component Unmounted');
            }
        )
    }, []);
    useEffect(() => {
        if(initFetchDone) {
            // TODO: Traderid currently fixed
            fetchTrades(blocknumber, 1, notifications, dispatch);
        }
    }, [refresh]);

    /**
     * @constant MAIN_TABS
     * @type {array}
     * array of objects that contains a 'key' and a 'component' that is mapped to the 'component' attribute from a tab object in....
     * ....matchLink
     */
    const MAIN_TABS= [
        { key: 'Home' },
        { key: 'NewTrade' },
        { key: 'Trade' },
        { key: 'Blotter' },
        { key: 'FileNewTrade' }
    ];

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
     * @constant openTabs
     * @type {array}
     * used in handleClick method to redirect to a tab if it is already open
     */
    const [openTabs, changeTabs] = useState(['Home']);

    /**
     * @function matchLink
     * @type string
     * @param link
     * helper function that receives a link {string} from an option in the <HomePane />'s (child components of <Home />) and
     * matches it to a 'component' in the MAIN_TABS array via the 'key'
     * @return number
     */
    function matchLink(link) {
        for (let i = 0; i < MAIN_TABS.length; i++) {
            const data = MAIN_TABS[i];
            if (link === data.key) {
                return i;
            }
        }
        throw Error('Component Not Found');
    }

    /**
     * @function handleTabSwitch
     * @type number
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
     * @param index
     * eventHandler helper function that takes the closed tab and pops it from 'tabs' piece of state
     */
    function handleTabClose(index) {
        dispatch({ type: 'REMOVE_TAB', payload: index });
        const newTabs = openTabs.filter((value, i) => {
            return i !== index;
        });
        changeTabs(newTabs)
    }

    /**
     * @function handleClick
     * @param link
     * @param linkProps
     * eventHandler helper function that takes the link as a param and returns a component number from matchLink()
     * if the tab is already open (!indexOf(link) === -1) then switch to that tab with handleTabSwitch
     * else dispatch a new tab object containing a title, index, and component keys to be appended to 'tabs'...
     * ...piece of state
     */
    function handleClick(link, linkProps) {
        let component = matchLink(link);
        if (openTabs.indexOf(link) === -1) {
            let newTabContent = {
                title: link.match(/[A-Z][a-z]+|[0-9]+/g).join(" "),
                index: tabs.length,
                key: link,
                props: (linkProps ? linkProps : {}),
                component: component
            };
            dispatch({type: 'ADD_TAB', payload: newTabContent});
            const newOpen = [...openTabs];
            newOpen.push(link);
            changeTabs(newOpen);
        }
        else {
            handleTabSwitch(openTabs.indexOf(link));
        }
    }

    function createTab(key, props) {
        switch (key) {
            case 'Home':
                return (
                    <Home {...props} onClick={ handleClick } />
                );
            case 'NewTrade':
                return (
                    <NewTrade {...props} onClick={ handleClick} />
                );
            case 'Trade':
                return (
                    <Trade {...props} />
                );
            case 'Blotter':
                return (
                    <Blotter onRowClick={ handleClick} />
                );
            case 'FileNewTrade':
                return (
                    <FileUpload {...props} />
                );
            default:
                throw new error('Tab Map Failed')
        }
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
        <Grid container spacing={ 2 }>
            <Grid item xs={ 12 } style={{ maxWidth: 'min-content', backgroundColor: '#f5f5f5'}}>
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
                                    title={value.title}
                                    showClose={ index !== 0 }
                                >
                                    <Grid container spacing={ 4 }>
                                        <Grid item xs={ 12 }>
                                            <Header />
                                        </Grid>
                                        <Grid item xs={ 12 }>
                                            {
                                                createTab(value.key, value.props)
                                            }
                                        </Grid>
                                    </Grid>
                                </Tab>
                            );
                        })
                    }
                </Tabs>
            </Grid>
        </Grid>
    );

};

/**
 * @function getInitialProps
 * @param ctx
 * checks if user is already logged in before Main component is mounted, if not redirected to  Login page
 * @return {Promise<boolean|any|Promise<boolean>>}
 */

/* Main.getInitialProps = async ctx => {
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
        });

        if (response.ok) {
            const js = await response.json()
            console.log('js', js);
            return js
        } else {
            // https://github.com/developit/unfetch#caveats
            return await redirectOnError()
        }
    } catch (error) {
        // Implementation or Network error
        return redirectOnError()
    }
};

export default withAuthSync(Main);

 */
export default Main;
