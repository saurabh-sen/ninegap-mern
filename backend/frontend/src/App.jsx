import React from 'react'
import './App.css'
import HomePage from './Components/HomePage/HomePage.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import { Routes, Route } from "react-router-dom"
import Error from './Components/Error/Error'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App