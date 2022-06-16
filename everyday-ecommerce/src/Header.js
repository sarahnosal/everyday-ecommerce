import React from 'react'
import { Link } from 'react-router-dom'

function Header(){


    return (
        <div className='header'>
            <Link to='/account'>Account Icon</Link>
            <h1>EVERYDAY ECOMMERCE</h1>
            <span>Search bar</span>
            <span>Cart Icon</span>
            <span>Favorites Icon</span>
            <nav className='NavBarItems'>
                <ul className='nav-menu'>
                    <Link id='new' to='/new'>What's New</Link>
                    <Link id='home' to='/home'>Home</Link>
                    <Link id='shop' to='/shop'>Shop</Link>
                    <Link id='blog' to='/blog'>Blog</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header