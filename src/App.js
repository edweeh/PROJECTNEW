import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [isloggedin,setIsloggedin] =useState(false);

const Logincheck =(email,password) =>{
  setIsloggedin(true);
}
const Logoutcheck=(email,pasword)=>{
  setIsloggedin(false)
}
   return (
     <div className="App">
    <React.Fragment>
      <header/>

      { isloggedin && <Home checkLogout={Logoutcheck}/>}
      { !isloggedin && <Login checkLogin={Logincheck}/>}                                                                                                                                                              .
      
    </React.Fragment>

    
     </div>
   
  );
}

export default App;
