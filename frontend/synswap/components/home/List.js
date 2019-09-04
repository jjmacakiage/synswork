import {ClickAwayListener, Divider, MenuItem, MenuList} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function OptionsList(props) {
    return (
        <div>
            {
                <ClickAwayListener
                    onClickAway={props.handleClose}
                >
                    <MenuList>
                        {
                            props.items.map((value, index) => {
                                const {onClick} = props;
                                return (
                                    <div key={index}>
                                        <MenuItem
                                            value={props.links[index]}
                                            onClick={() => onClick(props.links[index])}
                                        >
                                            <Typography variant="overline"> {value} </Typography>
                                        </MenuItem>
                                        {
                                            (index !== props.items.length - 1) ?
                                                <Divider dark /> : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </MenuList>
                </ClickAwayListener>
            }
        </div>
    );
}
