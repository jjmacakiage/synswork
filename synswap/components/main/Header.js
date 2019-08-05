import React, { useState } from 'react';
import { AppBar, Button, IconButton, InputBase, Toolbar }from "@material-ui/core";
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


import ProfileMenu from "./ProfileMenu";
import List from '../home/List';
import SearchList from './SearchList';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    rootList: {
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        top: 36,
        right: 0,
        left: 0,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));


export default function Header(props) {
    const classes = useStyles();
    const [searchValue, changeValue] = useState('');
    const [isOpen, open] = useState(false);
    const { items, links } = props;
    const [resultList, changeList] = useState(items);

    const handleChange = (e) => {
        open(true);
        changeValue(e.target.value);
        filterList();
    };

    const filterList = () => {
        const newList = resultList.filter((value) => {
            return value.includes(searchValue);
        });
        changeList(newList);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={ classes.toolbar }>
                    <div className={classes.search}>
                        {
                            /*
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={ e => handleChange(e) }
                        />
                        */
                        }
                        <SearchList/>
                    </div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <ProfileMenu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}



