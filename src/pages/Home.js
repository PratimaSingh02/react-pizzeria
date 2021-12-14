import React from 'react'
import {Link} from 'react-router-dom'
import pizza_bg from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{backgroundImage:`url(${pizza_bg})`}}>
            <div className='headerContainer'>
                <h1>Pedro's Pizzeria</h1>
                <p>PIZZA THAT FITS ANY TASTE</p>
                <Link to='/menu'>
                 <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
