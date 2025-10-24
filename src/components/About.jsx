import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './Profile'

const About = () => {
  return (
    <>
    <h1>About Us Page</h1>
    <p>This is the namaste react live course chapter 07 finding the path</p>
    <Outlet/>
   
    </>
  )
}

export default About