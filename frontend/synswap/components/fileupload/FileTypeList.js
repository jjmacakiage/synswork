import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText, Checkbox, makeStyles } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function FileTypeList(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    function handleClick() {
        setOpen(!open);
    }

    return (
        <List>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={ <Typography variant="overline"> Type </Typography> } />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List className={classes.root}>
                    {props.options.map(value => {
                            const labelId = `checkbox-list-label-${value}`;
                            return (
                                <ListItem key={value} role={undefined} dense button onClick={ props.handleToggle(value) }>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={props.checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={ <Typography variant="overline"> {value} </Typography> }/>
                                </ListItem>
                            );
                        })}
                </List>
            </Collapse>
        </List>
    )
}
