import React from 'react'
import { Link } from 'react-router-dom'
import m from '../scss/main.module.scss'
import FooterStory from '../components/FooterStory'
import { BsArrowRight } from 'react-icons/bs'

const Main = () => {
    return (
        <div className={m.main}>
            <div className={m.main_shoes}>
                <div className={m.shoes_block}>
                    <h1>ADIDAS X GUCCI</h1>
                    <p className={m.shoes_block_info}>Signature silhouettes meet the combined creative codes of adidas and the House. Available on CONFIRMED.</p>
                    <Link to={'/shoes'} className={m.shoes_btn} >
                        <nav className={m.shoes_btn_inner}>
                            Shop Shoes
                        </nav>
                        <BsArrowRight className={m.shoes_btn_icon} />
                    </Link>
                </div>
            </div>
            <FooterStory />
        </div>
    )
}

export default Main