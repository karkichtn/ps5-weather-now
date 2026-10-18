import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cities from './pages/Cities'
import Weather from './pages/Weather'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cities' element={<Cities />} />
                <Route path='/weather/:city' element={<Weather />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App