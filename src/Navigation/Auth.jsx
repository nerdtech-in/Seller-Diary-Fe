import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from '../Screens/Details'
export default function Auth() {
    return (
        <Routes>
            <Route path='/' element={<Details />} />
            <Route path='/*' element={<Details />} />
        </Routes>
    )
}
