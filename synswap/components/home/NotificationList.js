import React from 'react';
import {List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxHeight: 120,
        overflowY: "scroll"
    }
});

export default function NotificationList(props) {
    const classes = useStyles();
    const isEmpty = props.data.length === 0;
    return (
        <div className={ classes.root }>
            <List component="ul">
                {!isEmpty ? props.data.map((value, index) => {
                    return <ListItem><ListItemText key={index} secondary={value.message}>{value.title}</ListItemText></ListItem>
                }) : <Typography variant="overline"> No notifications to display </Typography>}
            </List>
        </div>
    );
}
