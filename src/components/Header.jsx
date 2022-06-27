import React from 'react'
import h from '../scss/header.module.scss'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GrDeliver } from 'react-icons/gr'


const Header = () => {
    return (
        <div className={h.m}>
            <div className={h.m_top}>
                <GrDeliver className={h.m_top_del} />
                <p>FREE STANDARD SHIPPING & RETURNS | JOIN NOW</p>
            </div>
            <div className={h.main}>
                <Link to={'/'}> <svg width="60" height="60" viewBox="0 0 50 50"> <path fillRule="evenodd" clipRule="evenodd" d="M50.0701 39.7718L31.9254 8.33325L22.2068 13.9395L37.112 39.7718H50.0701ZM32.7817 39.7719L20.7971 19.0254L11.0785 24.6317L19.8235 39.7719H32.7817ZM9.71859 29.7344L15.5095 39.7719H2.55134L0 35.3406L9.71859 29.7344Z" fill="black"></path></svg> </Link>
                <div className={h.navbar}>
                    <Link className={h.navbar_bar} to='/men'> <nav>Mens</nav></Link>
                    <Link className={h.navbar_bar} to='/women'> <nav>WOMEN</nav></Link>
                </div>
                <Link to={'/cart'}>
                    <div className={h.cart}>
                        <p>0 $</p>
                        <MdOutlineShoppingBag  />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header