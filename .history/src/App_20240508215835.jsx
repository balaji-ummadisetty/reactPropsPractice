
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import funghi.jpg from 'pizzas/'
import './App.css'
import { pizzaData } from './data.js'

function Pizza() {
    return
    (
        <div>
            <img src ='pizzas/funghi.jpg' alt="pizza image" />
            <h2>Pizaa</h2>
        </div>
    )
}
function App() {
    return (
        <>
            <Pizza />
        </>
    )
}

export default App
