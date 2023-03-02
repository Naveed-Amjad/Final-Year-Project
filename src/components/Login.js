
import React, { useState } from 'react';
import "./Login.css";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // do something with email and password, like sending to server
  }

  return (
    <form onSubmit={handleSubmit}>
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











// import "./Login.css";
// import { text } from "@fortawesome/fontawesome-svg-core";

// function Login(){
//     return(
        
        


            // <div className = 'container'>
            //     <div className = 'rectangle'>
            //         <div className = 'login'>
            //             <h1> Login</h1>
            //         </div>
            //         <div className = 'email'>
            //             <p>Email:</p>
            //         </div>
            //         <div className = 'input1'>
            //         <input type={text} placeholder="johndoe@gmail.com"></input>
            //         </div>
            //         <div className = 'password'>
            //             <p>Password:</p>
            //         </div>
            //         <div className = 'input2'>
            //         <input type={text} placeholder="abc@johndoe123"></input>
            //         </div>
            //         <div className = 'login-button'>
            //             <div className = 'login'>
            //                 <button type="button">Login</button>
            //             </div>
            //         </div>
            //         <div className = 'text1'>
            //             <input type={text}>Don't have an account? Sign Up</input>
            //         </div>
            //         <div className = 'line'>
            //         </div>
            //     </div>
            // </div>
// )
// }

// export default Login;