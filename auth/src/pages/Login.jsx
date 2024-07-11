/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {auth,provider} from '../firebaseConfig'
import { signInWithEmailAndPassword ,signInWithPopup} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [value,setValue] =useState("")

    const handleLogin=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user=userCredential.user;

            console.log(user.accessToken);
            navigate("/home")
            alert("Login successfully")
        }).catch((error)=>{
            console.log(error);
            alert("Invalid Credentials");
        })
    }

    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem('email',data.user.email)
            navigate("/home")
            alert("Login Successfully")
        })
    }

    useEffect(()=>{
        localStorage.getItem("email")
    },[])
  return (
    <div>
            <h2>SignIn</h2>
          <input type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
          <input type="password" placeholder="Enter password" value={password}onChange={(e=>setPassword(e.target.value))}/> <br />
          <button onClick={handleLogin}>Login</button><br />
          <button onClick={handleClick}>Login with Google</button>
        
      <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>
    </div>
  )
}

export default Login