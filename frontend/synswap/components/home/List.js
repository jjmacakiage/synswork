import {ClickAwayListener, Divider, MenuItem, MenuList} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function OptionsList(props) {
    const { items, links, onClick } = props;
    return (
        <div>
            {
                <ClickAwayListener
                    onClickAway={props.handleClose}
                >
                    <MenuList>
                        {
                            items.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <MenuItem
                                            value={links[index]}
                                            onClick={() => onClick(links[index])}
                                        >
                                            <Typography variant="overline"> {value} </Typography>
                                        </MenuItem>
                                        {
                                            (index !== items.length - 1) ?
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
