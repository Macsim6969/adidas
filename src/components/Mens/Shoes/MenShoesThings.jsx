import React from 'react'
import sn from '../../../scss/sneakers.module.scss'

const MenShoesThings = ({ sneakers }) => {
    
    return (
        <div className={sn.sneaker_cont_sneak}>
            {sneakers && sneakers.map((sne) => {
                return <div className={sn.sneaker_cont_sneak_shoes} key={sne.id}>
                    <img className={sn.sneaker_cont_sneak_shoes_pict} src={sne.imageURL[0]} alt="" />
                    
                </div>
            })}
        </div>
    )
}

export default MenShoesThings