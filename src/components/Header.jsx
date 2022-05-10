import React from 'react'
import h from '../scss/header.module.scss'
import Logo from '../img/Logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className={h.m}>
            <div className={h.main}>
                <Link to={'/'}> <img src={Logo} alt="Logo" /> </Link>
                <div className={h.navbar}>
                    <Link className={h.navbar_bar} to='/men'> <nav>Mens</nav></Link>
                    <Link className={h.navbar_bar} to='/shoes'> <nav>SHOES</nav></Link>
                    <Link className={h.navbar_bar} to='/clothing'> <nav>CLOTHING</nav></Link>
                </div>
                <Link to={'/cart'}>
                    <div className={h.cart}>
                        <p>0 $</p>
                        <div className={h.brd}></div>
                        <FaShoppingCart className={h.cart_image} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header