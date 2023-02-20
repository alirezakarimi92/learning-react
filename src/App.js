import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Glass from './components/pages/Glass';

function App() {
    return (
        <>
        <BrowserRouter>
            <Navbar className="navbar"/>
            <br />
            <Routes>
                <Route path='/dashco' element={<Home />} />
                <Route path='/glass' element={<Glass />} />  
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;