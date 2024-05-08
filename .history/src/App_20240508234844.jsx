import React from 'react';
import './App.css';
import { pizzaData } from './data.js';

function Pizza({name,ingredients,price,photoName,soldOut}) {

    return (
        <div className={`pizza ${pizzObjsoldOut && "sold-out"}`}>
            <img src={pizzObjphotoName} alt={pizzObjphotoName} />
            <div>
                <h3>{pizzObjname}</h3>
                <p>{pizzObjingredients}</p>
                <span>{pizzObjprice}</span>
            </div>
        </div>
    );
}

const Header = () => {
    // const styled = {color: 'red' , fontSize : '32px'};
    return (
        <header className='header'>
            <h1>FAST REACT PIZAA CO.</h1>
        </header>
    );
}
const Menu = () => {
    return (
        <main className="menu" >
            <h2>Our menu</h2>
            <p>Authentic Indian cuisine. 6 creative to choose from. All From our stove oven, all organic, all delicious</p>
            <div className='pizzas'>
                {pizzaData.map((data) => {
                    return <Pizza pizzaObj={data} key = {data.name} name={data.name} ingredients={data.ingredients} price={data.price} photoName={data.photoName} soldOut={data.soldOut} />
                })}
            </div>
        </main>
    )
}
const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 24;
    const isopen = hour >= openHour && hour <= closeHour;

    if (!isopen) {
        return (
            <p>We're happy to welcome uou between {openHour}:00 and {closeHour}:00 </p>
        );
    }
    return (
        <footer className='footers'>
            <div className='order'>
                <p>We're open until {closeHour}:00 .Come visit us or order online</p>
                <button className='btn'>Order Now</button>
                </div>
            </footer>
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
