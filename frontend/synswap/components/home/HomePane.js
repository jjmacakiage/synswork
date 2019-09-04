import React, { useState, useRef } from 'react';
import {
    Card,
    CardActionArea,
} from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';

import List from './List';
import Typography from "@material-ui/core/Typography";

export default function HomePane(props) {
    const [isFlipped, flip] = useState(false);
    const anchorRef = useRef(null);

    function flipCard(e) {
        e.preventDefault();
        flip(!isFlipped);
    }



    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        flip(false);
    }

    return (
        <Card square={ true }>
            <CardActionArea onClick={ e => flipCard(e) }>
                <ReactCardFlip isFlipped={ isFlipped } flipDirection="horizontal">
                    <div key="front">
                        <Typography variant="overline"> { props.title }</Typography>
                    </div>
                    <div key="back">
                        <List
                            items={ props.items }
                            links={ props.links }
                            onClick={ props.onClick }
                            handleClose={ e => handleClose(e)}
                        />
                    </div>
                </ReactCardFlip>
            </CardActionArea>
        </Card>
    );
}


