import React, { useState, useRef } from 'react';
import {
    Button,
    Card,
    CardActionArea,
    ClickAwayListener,
    Grid,
    MenuList,
    MenuItem
} from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import TextField from "@material-ui/core/TextField";

export default function HomePane(props) {
    const [isFlipped, flip] = useState(false);
    const anchorRef = useRef(null);

    function flipCard(e) {
        e.preventDefault();
        flip(!isFlipped);
    }
    function OptionsList(props) {
        return (
            <Grid>
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList>
                        { props.items.map((value, index) => {
                            const { onClick } = props;
                            return <MenuItem
                                        key={ index }
                                        value={ props.links[index] }
                                        onClick={ () => onClick(props.links[index]) }
                                    >
                                        {value}
                                  </MenuItem>
                        }) }
                    </MenuList>
                </ClickAwayListener>
            </Grid>
        );
    }


    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        flip(false);
    }

    return (
        <div>
        <Card>
            <CardActionArea onClick={ e => flipCard(e) }>
                <ReactCardFlip isFlipped={ isFlipped } flipDirection="horizontal">
                    <div key="front">
                        <h1>{ props.title }</h1>
                    </div>
                    <div key="back">
                        <OptionsList items={ props.items } links={ props.links } onClick={ props.onClick }/>
                    </div>
                </ReactCardFlip>
            </CardActionArea>
        </Card>
            {
                (props.showTextField && isFlipped) ?
                    (
                        <Card>
                            <div>
                                <div style={{padding: 10}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                variant="outlined"
                                                value={props.textFieldValue}
                                                label={props.textFieldLabel}
                                                onChange={props.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button onClick={props.textFieldSubmit} color="primary" variant="outlined"
                                                    style={{margin: 10}}> Submit </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Card>
                    ) : null
            }
        </div>
    );
}


