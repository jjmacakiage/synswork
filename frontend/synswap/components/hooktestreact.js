import React, { useState, useReducer, useEffect } from 'react';
import { Button, Input } from "@material-ui/core";


const loginReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_INIT':
            return {...state};
        case 'LOGIN_SUCCESS':
            return {...state, jwt: action.payload};
        case 'LOGIN_FAIL':
            return {...state};
    }
}

const doLogin = () => {
    return { jwt: 'test'};
};

const loginFunction = () => {
    const [state, dispatch] = useReducer(loginReducer, {
        jwt: '',
        isError: false
    });

    useEffect(() => {
        const loginUser = async () => {
            dispatch({ type: 'LOGIN_INIT'});

            try {
                const result = await doLogin();
                dispatch( { type: 'LOGIN_SUCCESS', payload: result.jwt } );
            } catch {
                dispatch( { type: 'LOGIN_FAIL' } );
            }
        };

        loginUser();

    }, []);

    return [state];
};


export default function HookTestReact() {
    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");
    const [ { jwt }, doLeThing] = loginFunction();

    return (
        <div style={{ marginBottom: 20 }}>
            <Input onChange={event => changeUsername(event.target.value)} placeholder="Username" value={username}/>

            <Input onChange={event => changePassword(event.target.value)} placeholder="Password" value={password}/>

            <Button onClick={doLeThing}> submit </Button>
        </div>
    );
}
