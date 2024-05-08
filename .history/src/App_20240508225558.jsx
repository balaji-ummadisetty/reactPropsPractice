import React from 'react';
import './App.css';
import { pizzaData } from './data.js';

function Pizza(props) {

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
        <p>Authentic Indian cuisine. 6 creative to choose from. All From our stove oven, all organic, all delicious</p>
        <Pizza name="Pizza spinachi" ingredients='Tomatos' price='10' photoName='="/pizzas/funghi.jpg'/>
        </main>
    )
}
const Footer =()=>{

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    return (
    <footer className='footers'> {new Date().toLocaleTimeString()} We're currently {(hour>=openHour && hour<=closeHour) ? "open" : "close"}.</footer>
    );
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