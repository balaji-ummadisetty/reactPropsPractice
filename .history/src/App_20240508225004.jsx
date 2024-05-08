import React from 'react';
import './App.css';
import { pizzaData } from './data.js';

function Pizza() {

    return (
        <>
            <img src ="/pizzas/funghi.jpg" alt='Pizaa Image' />
            <h2>Pizza</h2>
        </>
    );
}

const Header= ()=>{
    // const styled = {color: 'red' , fontSize : '32px'};
       return (
        <header className='header'>
       <h1>FAST REACT PIZAA CO.</h1>
       </header>
    ) ;
}
const Menu =()=>{
    return (
        <main className="menu" >
        <h2>Our menu</h2>
        </main>
    )
}
const Footer =()=>{

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    return (
    <footer > {new Date().toLocaleTimeString()} We're currently {(hour>=openHour && hour<=closeHour) ? "open" : "close"}.</footer>
}
    
}
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
