import React, {useEffect, useState} from 'react';
import { Card, makeStyles } from "@material-ui/core";

import NotificationList from './NotificationList';
import {useSelector} from "react-redux";

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
    const notifications = useSelector(state => state.NotificationReducer.notifications);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(notifications);
        console.log(data);
    }, [notifications]);
    return (
        <div className={classes.root}>
            <Card square={ true }>
                <NotificationList data={data}/>
            </Card>
        </div>
    );
}
