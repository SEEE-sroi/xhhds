 
import { useDispatch } from "react-redux";
import { login } from "./user";
import { useState } from "react";

import React from 'react'
function Login() {
    const [dataa,setDataa] = useState("");
    const dispatch = useDispatch();
 
 
   
  return (
    <div>
      <button onClick={()=>{
        dispatch(login({name:"Pesdro",age:550,email:"hbhsdbvfbfdbfdb,fd"}));    }}> Login</button>  
        <button  onClick={()=>{
        dispatch(login({name:"Sai Pawan Pemmaraju",age:5500,email:"dhoom@mentalli"}));    }} >
            LogIn   One
        </button>
        <button onClick={()=>{
        dispatch(login({name:"Alinns",age:55555550,email:"alienss"}));    }}>
            Logout
        </button>
        <form onSubmit={event=>console.log(event)}><input type ="text " onChange={ ((event)=>setDataa(event.target.value))} placeholder="Input something" />
        <button type="submit">
          
           Do nothing 
          </button></form>
        
        
    </div>
  )
}

export default Login
