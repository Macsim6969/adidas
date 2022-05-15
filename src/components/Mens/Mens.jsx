import React from 'react'
import { Link } from 'react-router-dom'
import m from '../../scss/mens.module.scss'
import MensCategStory from './MensChoise/MensCategStory'
import  MensChoice  from './MensChoise/MensChoice'

const Mens = () => {
    return (
        <div className={m.header}>
            <div className={m.header_banner}>
                <div className={m.header_banner_inner}>
                    <h1 className={m.header_banner_inner_log}>LOVE UNITES</h1>
                    <p>Be bold, be you. Celebrate pride with <br />the adidas x Kris Andrew Small collab.</p>
                    <Link to={'/pride'} ><button>SHOP NOW</button></Link>
                </div>
            </div>
            <div className={m.header_choice}>
                <MensChoice/> 
                <MensCategStory/>
            </div>
        </div>
    )
}

export default Mens