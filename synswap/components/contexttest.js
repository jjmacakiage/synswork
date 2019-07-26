import React, { Component } from 'react';
import Context from './context';

export default function ContextTest() {
    return (
        <Context.Consumer>
            {context =>
                <div>
                    <h1>{context.names[0]}</h1>
                </div>
            }

        </Context.Consumer>
    );
}
