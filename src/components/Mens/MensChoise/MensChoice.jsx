import React from 'react'
import m from '../../../scss/mens.module.scss'
import sneekers from '../../../img/mans/sneekers.webp'
import tops from '../../../img/mans/tops.webp'
import hoodie from '../../../img/mans/trefoil-hoodie.jpg'
import pants from '../../../img/mans/pants.webp'
import { Link } from 'react-router-dom'

const MensChoice = () => {
    return (
        <>
            <div className={m.choice_block}>
                <Link className={m.choice_block_inner} to={'/men-sneakers'} >
                    <div className={m.choice_block_inner_content}>
                        <img className={m.choice_block_inner_content_img} src={sneekers} alt="sneakers" />
                        <p className={m.choice_block_inner_content_cat}>sneakers</p>
                    </div>
                </Link>
                <Link className={m.choice_block_inner} to={'men-top'} >
                    <div className={m.choice_block_inner_content}>
                        <img className={m.choice_block_inner_content_img} src={tops} alt="tops" />
                        <p className={m.choice_block_inner_content_cat}>top</p>
                    </div>
                </Link>
                <Link className={m.choice_block_inner} to={'men-hoodie'} >
                    <div className={m.choice_block_inner_content}>
                        <img className={m.choice_block_inner_content_img} src={hoodie} alt="hoodie" />
                        <p className={m.choice_block_inner_content_cat}>HOODIES & SWEATSHIRTS</p>
                    </div>
                </Link>
                <Link className={m.choice_block_inner} to={'men-pants'} >
                    <div className={m.choice_block_inner_content}>
                        <img className={m.choice_block_inner_content_img} src={pants} alt="pants" />
                        <p className={m.choice_block_inner_content_cat}>pants</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default MensChoice