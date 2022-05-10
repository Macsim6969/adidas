import React from 'react'
import { Link } from 'react-router-dom'
import l from '../../../scss/love.module.scss'

const Unit = ({id, imageURL, price, title, category}) => {
    return (
        <Link to={`/pride/${id}`} >
            <div className={l.units_product_block}>
                <img className={l.units_product_block_photo} src={imageURL[0]} alt="" />
                <div className={l.units_block}>
                    <p className={l.units_block_price}>$ {price}</p>
                    <p className={l.units_block_title}>{title}</p>
                    <p className={l.units_block_category}>{category}</p>
                    <p className={l.units_block_count}>Color:{imageURL.length}</p>
                </div>
            </div>
        </Link>
    )
}

export default Unit