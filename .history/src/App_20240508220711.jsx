import React from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import './App.css';
import { pizzaData } from './data.js';

function Pizza() {
    return (
        <>
            <img src = '/pupizzas/funghi.png' alt='Pizaa Image'></img>
            <h2>Pizza</h2>
        </>
    );
}

function App() {
    return (
        <>
            <Pizza />
        </>
    );
}

export default App;
