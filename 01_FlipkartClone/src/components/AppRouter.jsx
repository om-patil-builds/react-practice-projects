import {Routes, Route } from 'react-router-dom'
import Login from './Routes/Login'
import  Home from './Routes/Home'

function AppRouter() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  )
}

export default AppRouter