import React, { useState } from 'react'
import classes from './Login.module.css';
const Login = (props) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);

    const readEmail =(event) =>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }
        const readPassword =(event) =>{
       console.log(event.target.value);
        setPassword(event.target.value);
    }   

        const readlogindata =(event) => {
        event.preventDefault();

         if(!email.includes('@') || password === '' )
        {
            setError(true);
            return;
        } 
       console.log(email);
       console.log(password);
       const myobj={
        Email: email,
        Password: password
       }
        console.log(myobj)
        props.checkLogin(email,password);
    }
  return (
    <div><h3>Login</h3>
     <form onSubmit={readlogindata}>
      Email: <input type="text" onChange={readEmail} /><br/>
      <br></br>
      Password: <input type="password" onChange={readPassword} /><br/>
     <br></br>
    <button type='submit' className={classes.button}>Login</button>
     </form>
     {error && 'error occurs'}
     
     </div>

  )
}

export default Login