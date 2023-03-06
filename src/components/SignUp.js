import axios from 'axios';
import React, { useState } from 'react';
import "./Login.css";


function Login() {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ name, setName] = useState('');

  const handleNameChange = (event) =>{
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    // window.alert('Successfully clicked')
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    // do something with email and password, like sending to server


    axios.post('http://localhost:5000/travelry/register', {
      name: name,
      email: email,
      password: password
    })
    .then((response) =>{
      window.alert('Successfully Registered')
      console.log(response);
      window.location.reload(false)

      // handle successful response
    })
    .catch((error)=> {
      console.log(error);
      // handle error
    });
  }

  return (
    <form >
        <div>
        <label className='label1' htmlFor="email">Name:</label>
        <input className='email1' type="name" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label className='label1' htmlFor="email">Email:</label>
        <input className='email1' type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className='email1' type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button className='email1' type="submit" onClick={handleSubmit}>Login</button>
    </form>
  );
}

export default Login;