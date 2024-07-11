/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {auth} from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password).then((data)=>{
            console.log(data)
            alert("register successfully")
        }).catch((error)=>{
            console.log(error)
            alert(error.message)
        })
    }
  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button type="submit">Sign Up</button>
        </form>

        <p>Already have an Acoount..Login <Link to="/">here</Link></p>

    </div>
  )
}

export default Signup