
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
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    // do something with email and password, like sending to server
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label className='label1' htmlFor="email">Name:</label>
        <input className='email1' type="email" id="email" value={email} onChange={handleNameChange} />
      </div>
      <div>
        <label className='label1' htmlFor="email">Email:</label>
        <input className='email1' type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className='email1' type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button className='email1' type="submit">Login</button>
    </form>
  );
}

export default Login;