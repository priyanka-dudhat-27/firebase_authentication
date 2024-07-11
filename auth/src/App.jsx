/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App