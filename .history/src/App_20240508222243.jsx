import React from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import './App.css';
import { pizzaData } from './data.js';

function Pizza() {
    return (
        <>
            <img src = "/pizzas/funghi.jpg" alt='Pizaa Image' />
            <h2>Pizza</h2>
        </>
    );
}

const Header= ()=>{
       return <h1>FAST REACT PIZAA CO .</h1>
}
const Menu =()=>{

}
const Footer =()=>{
    
}
function App() {
    return (
        <>
            <Header />
            <Menu />
            <Footer />
            <Pizza />
        </>
    );
}

export default App;
