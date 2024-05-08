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
    return (
        <div>
        <h2>Our menu</h2>
        </div>
    )
}
const Footer =()=>{
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    if(hour>=openHour && hour<=closeHour){
        return <footer> {new Date().toLocaleTimeString()} We're currently open.</footer>
    }
    return <footer> {new Date().toLocaleTimeString()} We're currently {hour>=openHour && hour<=closeHour ?? open: close}.</footer>
    
}
function App() {
    return (
        <>
            <Header />
            <Menu />
            <Footer />
        </>
    );
}

export default App;
