import React from 'react';
import './App.css';
import { pizzaData } from './data.js';

function Pizza(props) {

    return (
        <div className='pizza'>
            <div>
            <img src ={props.photoName} alt={props.photoName} />
            <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <span>{props.price}</span>
            </div>
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
        {pizzaData.map((data) =>{
            return <Pizza name={data.name} ingredients={data.ingredients} price={data.price} photoName={data.photoName}/>
        })}
        
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
