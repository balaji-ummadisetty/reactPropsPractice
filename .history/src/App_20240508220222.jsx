
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import funchi from '../public/pizzas/funchi.jpg'
import './App.css'
import { pizzaData } from './data.js'

function Pizza() {
    return
    (
        <div>
            <img src ='/pizzas/funchi.jpg' alt="pizza image" />
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