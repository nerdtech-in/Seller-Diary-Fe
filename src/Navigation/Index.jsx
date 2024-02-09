import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Orders from '../Screens/Orders'
import Menu from '../Screens/Menu'
import Details from '../Screens/Details'

export default function Index() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/details' element={<Details/>}/>
    </Routes>
  )
}
