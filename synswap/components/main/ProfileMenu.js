import React from 'react';
import { makeStyles, withStyles, Button, Menu, MenuItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { ExitToApp, PersonOutlineSharp } from '@material-ui/icons';
import { useDispatch } from "react-redux";
import { logout } from "../../utils/Auth/auth";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles({
    root: {
        transition: 'all 0.05s ease-in',
        cursor: 'pointer',
        marginTop: 2,
        marginBottom: 2,
        '&:hover' :{
            marginTop: 0,
            marginBottom: 4
        }
    }
});
export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [hover, toggleHover] = React.useState(false);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function onMouseHover(e) {

    }
    function handleClose() {
        setAnchorEl(null);
    }

    function handleLogout() {
        dispatch({ type: 'LOGOUT' });
        logout();
    }

    return (
        <div className={ classes.root }>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            >
                <PersonOutlineSharp />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={ handleLogout }>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
