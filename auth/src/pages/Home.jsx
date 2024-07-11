/* eslint-disable no-unused-vars */
import React from 'react'
import {auth} from '../firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate()

    const handleClick=()=>{
        signOut(auth).then((value)=>{
            alert("User Logout successfully")
            navigate("/")
        }).catch((error)=>{
            console.log(error)
            alert("Error in Logout")

        })
    }
  return (
    <div>
        <h2>Home Page</h2>
        <button onClick={handleClick}>SignOut</button>
    </div>
  )
}

export default Home