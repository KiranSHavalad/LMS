import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../src/Components/Register'
import Login from '../src/Components/login'
import Home from './Components/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  exact element={<Login />} />
        <Route path="/login"  exact element={<Login />} />
        <Route path="/register" exact  element={<Register />} />
        <Route path="/home" exact element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
