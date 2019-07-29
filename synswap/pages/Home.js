import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from "react-redux";


import NotificationPane from '../components/home/NotificationPane';
import HomePane from '../components/home/HomePane';

/**
 * @constant useStyles
 * hook for Styling
 */
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        padding: 100
    },
    grid: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

/**
 * @class Home
 * @constructor
 * Contains the HomePage panes
 * Dependencies used:
    * @material-ui for Grid, makeStyles
 * Custom Components used:
    * @class NotificationPane
    * @class HomePane
 */

export default function Home(props) {
    const classes = useStyles();
    const [textFieldValue, changeValue] = useState('');
    /**
     * @constant newPane, readPane, adminPane
     * useSelector hook bound to constants
     * manages data (links and their titles) for each of the panes and updates on change to respective piece of state
     * @type {any}
     */
    const newPane = useSelector(state => state.PaneDataReducer.newPane);
    const readPane = useSelector(state => state.PaneDataReducer.readPane);
    const adminPane = useSelector(state => state.PaneDataReducer.adminPane);

    /**
     * @return
     * @type Grid
     * @type HomePane
     */
    return (
        <div className={ classes.root }>
            <div className={ classes.content }>
                <Grid container spacing={ 3 } className={ classes.grid }>
                    <Grid item xs={ 12 }>
                        <NotificationPane />
                    </Grid>
                    <Grid item xs={ 4 }>
                        <HomePane
                            title="New Trade"
                            items={ newPane.items }
                            links={ newPane.links }
                            onClick={ props.onClick }
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <HomePane
                            title="Read"
                            items={ readPane.items }
                            links={ readPane.links }
                            onClick={ props.onClick }
                            showTextField = { props.showTextField }
                            textFieldLabel="Enter Trade ID"
                            textFieldValue={ textFieldValue }
                            onChange={ e => changeValue(e.target.value) }
                            textFieldSubmit={ () => { return; } }
                        />
                    </Grid>
                    <Grid item  xs={ 4 }>
                        <HomePane
                            title="Admin"
                            items={ adminPane.items }
                            links={ adminPane.links }
                            onClick={ props.onClick }
                        />
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}
