import React from 'react'
import './appRoutes.css'
import Login from '../components/login/Login'
import Background_Image from '../images/containership.jpg'
import LoginForm from '../components/login/LoginForm'
import Register from '../components/register/Register'
import {Route, Routes} from 'react-router-dom'


function AppRoutes() {
  return (
    <div className='appRoutes-container' style={{backgroundImage: `url(${Background_Image})`}}>
        <Routes>
    <Route path='/' element={<><Login /><LoginForm /></>} />
    <Route path='/register' element={<><Register /></>} />
    </Routes>
    </div>
  )
}

export default AppRoutes