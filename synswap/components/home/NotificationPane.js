import React, { useState } from 'react';
import { Card, makeStyles } from "@material-ui/core";

import NotificationList from './NotificationList';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: 0
    },
    header: {
        alignLeft: true
    }
});

export default function NotificationPane(){
    const classes = useStyles();
    const [notifications, addNotifications] = useState([]);
    return (
        <div className={classes.root}>
            <Card square={ true }>
                <NotificationList data={notifications}/>
            </Card>
        </div>
    );
}
