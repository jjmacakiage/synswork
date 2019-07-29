import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { login } from '../utils/auth'
import LoginForm from '../components/login/LoginForm';

export default function Login () {
    const [userData, setUserData] = useState({ username: '', error: '' , password: ''});

    async function handleSubmit (event) {
        event.preventDefault();

        const username = userData.username;
        const url = '/api/login';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username })
            })
            if (response.status === 200) {
                const { token } = await response.json()
                await login({ token });
            } else {
                console.log('Login failed.')
                // https://github.com/developit/unfetch#caveats
                let error = new Error(response.statusText)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            )

            const { response } = error
            setUserData(
                Object.assign({}, userData, {
                    error: response ? response.statusText : error.message
                })
            )
        }
    }

    return (
        <div className='login'>
           <LoginForm
               onClick={ e => handleSubmit(e) }
               username={ userData.username }
               changeUsername={ e => { const newUsername = e.target.value;  setUserData({ username: newUsername, error: userData.error, password: userData.password}) } }
               changePassword={ e => { const newPassword = e.target.value;  setUserData({ username: userData.username, error: userData.error, password: newPassword}) } }
           />
        </div>
    )
}
