import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from './NavBar';

const Users = () => {

    const users = useLoaderData();

    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deleteCount > 0){
                alert('deleted successfully')
            }
            
        })

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='flex flex-col h-fit w-full items-center justify-center'>
                <h2>{users.length}</h2>
                {
                    users.map(user => <p key={user._id}
                    >{user.name} : {user.email} : {user._id}
                    <button onClick={() => handleDelete(user._id)} className='btn m-2 text-red-500'>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;