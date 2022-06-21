import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header(){


    return (
        <div className='header'>
            <Link to='/account'><AccountCircleIcon/></Link>
            <h1>EVERYDAY ECOMMERCE</h1>
            <span><SearchIcon /></span>
            <span><ShoppingBagIcon /></span>
            <span><FavoriteBorderIcon /></span>
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