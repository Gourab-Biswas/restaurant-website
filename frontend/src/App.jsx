import React from 'react'
import Navbarr from './Component/Navbarr'
import Home from './Component/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contact from './Component/Contact'
import Bengali from './Component/Bengali'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Chinese from './Component/Chinese'
import South_indian from './Component/South_indian'
import Footer from './Component/Footer'
import About from './Component/About'

const App = () => {
  return (
    <div>
      <Navbarr/>
      
      
      <BrowserRouter>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Bengali' element={<Bengali/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Chinese' element={<Chinese/>}/>
        <Route path='/South' element={<South_indian/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App