import React from 'react'
import { Link } from 'react-router-dom'
import m from '../scss/main.module.scss'
import { BsArrowRight } from 'react-icons/bs'

const Main = () => {
    return (
        <div className={m.main}>
            <div className={m.main_shoes}>
                <div className={m.shoes_block}>
                    <h1>News 2022</h1>
                    <p className={m.shoes_block_info}>Colections</p>
                    <p className={m.shoes_block_info}>A NEW PERSPECTIVE</p>
                    <Link to={'/shoes'} className={m.shoes_btn} >
                        <nav className={m.shoes_btn_inner}>
                            Shop Shoes
                        </nav>
                        <BsArrowRight className={m.shoes_btn_icon} />
                    </Link>
                </div>
            </div>
            <div className={m.main_clother}>
                <div className={m.clother_block}>
                    <div className={m.clother_block_left}>
                        <p className={m.block_info}>More</p>
                        <p className={m.block_info}>Jacket</p>
                    </div>
                    <div className={m.clother_block_left}>
                        <p className={m.block_info}>More</p>
                        <p className={m.block_info}>T-shirt</p>
                    </div>
                    <div className={m.clother_block_left    }>
                        <p className={m.block_info}>More</p>
                        <p className={m.block_info}>Hoodie</p>
                    </div>
                </div>
                <div className={m.clother_center}>
                    <p className={m.clother_center_info}>You can buy them</p>
                    <p className={m.clother_center_info}>2022</p>
                    <Link className={m.clother_center_btn} to={'/shoes'}>
                        <nav>For You</nav>
                        <BsArrowRight/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main