// // src/App.js
// import React from 'react';
// import Home from './components/Home';
//
// function App() {
//     return <Home />;
// }
//
// export default App;


// src/App.js
import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
