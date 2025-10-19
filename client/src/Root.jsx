import React from 'react'
import NavBar from './Components/NavBar'

function Root() {

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })
  }


  return (
    <div >
      <NavBar></NavBar>
      <div className='flex justify-center'>
        <form onSubmit={handleAddUser} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <input type="text" name='name' className="input" placeholder="Email" />
          <input type="email" name='email' className="input" placeholder="Password" />
          <input type="submit" value="Add User" className="w-full border-1 p-1 rounded-lg hover:cursor-pointer font-bold text-lg" />

        </form>
      </div>
    </div>
  )
}

export default Root