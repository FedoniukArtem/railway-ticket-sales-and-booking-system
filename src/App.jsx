import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking/:trainId" element={<Booking />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default App;