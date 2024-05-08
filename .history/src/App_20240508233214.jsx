import React from 'react';
import './App.css';
import { pizzaData } from './data.js';

function Pizza(props) {

    return (
        <div className={`pizza ${props.soldOut && "sold-out"}`}>
            <img src ={props.photoName} alt={props.photoName} />
            <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <span>{props.price}</span>
            </div>
        </div>
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
        <div className='pizzas'>
        {pizzaData.map((data) =>{
            return <Pizza name={data.name} ingredients={data.ingredients} price={data.price} photoName={data.photoName} soldOut={data.soldOut}/>
        })}
        </div>
        </main>
    )
}
const Footer =()=>{

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isopen = hour>=openHour && hour<=closeHour;

    if(!isopen){
        return (
            <footer className='footers'> {new Date().toLocaleTimeString()} We're currently {(hour>=openHour && hour<=closeHour) ? "open" : "close"}.</footer>
            ); 
    }
    return (
    <footer className='footers'> We're open until {closeHour}:00 .Come V</footer>
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
