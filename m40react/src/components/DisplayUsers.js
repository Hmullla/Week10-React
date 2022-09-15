import React from 'react' 
import { useState, useEffect } from "react";

//TODO: IMPORT DISPLAY USERS BELOW
import { deleteUser, displayUsers, updateUser } from '../utils';

const DisplayUsers = (props) => {
    console.log(props.setter);

    const [usernames, setUsernames] = useState()

    const loadUsernames = async () => {
        let users = await displayUsers()
        console.log(users )
        setUsernames(users)
    }

    const submitHandler3 = () => {
        deleteUser(props.setter)
    }

    useEffect (() =>{
        loadUsernames()
    },[props.user])
    return (
        <div className='usernames'>
            { usernames?.length > 0
                ?(
                    <div className="container">
                        <div>
                    {usernames.map((user) => (
                        <div>
                        <h3>{user}</h3>
                        <button onClick={updateUser}>Update user</button>
                        <button onClick={submitHandler3}>Delete user</button>
                        </div>
                    ))}
                    </div>
                    </div>
                ) : (
                    <div className="empty">
                    <h2>No users found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default DisplayUsers