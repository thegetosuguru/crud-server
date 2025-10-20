import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from './NavBar';

const Users = () => {

    const users = useLoaderData()

    return (
        <div>
            <NavBar></NavBar>
            <div className='flex flex-col h-fit w-full items-center justify-center'>
                <h2>{users.length}</h2>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;