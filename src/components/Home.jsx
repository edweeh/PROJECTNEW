import { ref, set } from 'firebase/database';
import React, { useState } from 'react'
import { uid } from 'uid'
import { db } from './config/Config';
const Home = (props) => {
    const [name,setname]=useState("");
    const [date,setdate]=useState("");
    const [dis,setdis]=useState("");
    const [url,seturl]=useState("");
    const namechange =(event) =>{
        setname(event.target.value);
    }
     const datechange =(event) =>{
        setdate(event.target.value);
    }
    const dischange =(event) =>{
        setdis(event.target.value);
    }
    const datachange =(event) =>{
        seturl(event.target.value);
    }
    const buttonClickHandler = () => {
        const uuid = uid();
        set(ref(db,`Events/${uuid}`),{
            name,
            date,
            dis,
            url,
            uuid,
        });
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
    <input className={Style.text} type='text' placeholder='name' onChange={datachange}></input><br/>
    <input className={Style.text} type='date'  onChange={datechange}></input><br/>
    <input className={Style.text} type='text' placeholder='describtion' onChange={dischange}></input><br/>
    <input className={Style.text} type='text' onChange={urlchange}></input><br/>
    <button type='submit' className={style.button}>Submit</button>
     </form>
    </div>
  )
}

export default Home