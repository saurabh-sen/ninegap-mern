import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Error = () => {
  return (
    <>
        <Navbar />
        <div className='Error sm:-[70vh] flex flex-col justify-center items-center'>
            <h1 className='text-5xl'> Error 404 not found </h1>
            <div className='button text-blue-500 underline'>
                <Link to="/">Go back to home</Link>
            </div>
        </div>
    </>
  )
}

export default Error