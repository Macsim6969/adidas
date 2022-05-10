import React from 'react'
import {  useSelector } from 'react-redux'
import s from '../scss/shoes.module.scss'
import ShoesColor from './ShoesColor'
import ShoesSize from './ShoesSize'

const ShoesContent = () => {
    
  const shoes = useSelector((state) => state.shoes.item)
    return (
        <>
            {
                shoes.map((con) => {
                    return <div key={con.id} className={s.main_shoes_cart}>
                        <img className={s.cart_img} src={con.imageURL} alt="" />
                        <nav>{con.name}</nav>
                        <nav>$ {con.price}</nav>
                        <ShoesColor {...con} />
                        <ShoesSize {...con} />
                    </div>
                })
            }
        </>
    )
}

export default ShoesContent