import React, { useState, useRef } from 'react';
import {
    Card,
    CardActionArea,
    ClickAwayListener,
    Grid,
    MenuList,
    MenuItem
} from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';

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
    );
}


