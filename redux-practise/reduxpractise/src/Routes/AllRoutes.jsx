import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Products from '../Components/Products'
import Signup from '../Components/Signup'

function AllRoutes() {
  return (
 
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={< Login/>} />
            <Route path="/products" element={<Products />} />

            
        </Routes>

  )
}

export default AllRoutes
