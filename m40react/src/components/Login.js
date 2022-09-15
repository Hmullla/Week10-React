import React from 'react' 
import { useState } from "react";
import { login, signUp } from '../utils';

const Login = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await login(username, email, password, setter)
    }

    const submitHandler2 = async (event) => {
        event.preventDefault()
        await signUp(username, email, password, setter)
    }

    return (
        <form className='boxes'>
            <div className='information'>
            <label> Username:
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>

            <label> Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>

            <label> password:
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br>
            <div className='inline'>
            <button onClick={submitHandler} type='submit'>Click here to login</button>
            <button onClick={submitHandler2} type='submit'>click here to sign up</button>
            </div>
            </div>
        </form>
    )
}

export default Login