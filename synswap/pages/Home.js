import React, { useState } from 'react';
import { Grid, makeStyles, Divider } from '@material-ui/core';
import { useSelector } from "react-redux";


import NotificationPane from '../components/home/NotificationPane';
import HomePane from '../components/home/HomePane';
import Typography from "@material-ui/core/Typography";
import Header from "../components/main/Header";

/**
 * @constant useStyles
 * hook for Styling
 */
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        paddingRight: theme.spacing(30),
        paddingLeft: theme.spacing(30)
    },
    grid: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    pane: {
        transition: 'all 0.1s ease-in',
        cursor: 'pointer',
        marginTop: 2,
        marginBottom: 2,
        '&:hover' :{
            marginTop: 0,
            marginBottom: 4
        }
    }
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
            <div className={ classes.content}>
                <Grid container spacing={ 3 } className={ classes.grid }>
                        <Grid item xs={ 12 }>
                            <Header
                                items={ ['Home', 'Blotter', 'New Trade'] }
                                links={ ['Home', 'Blotter', 'NewTrade'] }
                            />
                        </Grid>

                        <Grid item xs={ 12}>
                            <Typography variant="subtitle1"> HOME </Typography>
                            <br />
                            <Divider dark={ true } />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <NotificationPane />
                            <br />
                            <br />
                            <Divider dark={ true } />
                        </Grid>
                        <Grid item xs={ 4 }>
                            <div className={ classes.pane }>
                                <HomePane
                                    title="New Trade"
                                    items={ newPane.items }
                                    links={ newPane.links }
                                    onClick={ props.onClick }
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={ classes.pane }>
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
                            </div>
                        </Grid>
                        <Grid item  xs={ 4 }>
                            <div className={ classes.pane }>
                                <HomePane
                                    title="Admin"
                                    items={ adminPane.items }
                                    links={ adminPane.links }
                                    onClick={ props.onClick }
                                />
                            </div>
                        </Grid>
                </Grid>
            </div>
        </div>

    );
}
