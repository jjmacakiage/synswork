import React from 'react';
import Link from 'next/Link';

const IndexLink = props => (
    <li>
        <Link href="/[id]" as={`/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
export default function Index() {
    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
               <IndexLink id="Login" />
            </div>
        </div>
    );
}

