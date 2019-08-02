import React from 'react'

import List from '../components/home/List';
import NewTradeContent from '../components/newtrade/NewTradeContent';

export default function NewTrade(props) {
    return (
        <div>
            <Drawer items={ ['Create New Trade', 'Go To Blotter']} links={['NewTrade', 'Blotter']} onClick={ props.onClick } />
        </div>
    );
}

function Drawer(props) {
    const { items, links, onClick } = props;
    return (
        <div style={{ display: 'flex', flexGrow: 1, alignItems: "center", justifyContent: "center"}}>
            <div style={{ maxWidth: "min-content", marginRight: 10 }}>
                <List handleClose={() => {}} items={ items } links={ links } onClick={ onClick } />
            </div>
            <div>
                <NewTradeContent />
            </div>
        </div>
    )
}
