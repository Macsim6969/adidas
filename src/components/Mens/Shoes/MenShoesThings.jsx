import React, { useState } from 'react'
import sn from '../../../scss/sneakers.module.scss'

const MenShoesThings = ({ sneakers }) => {
    console.log(sneakers)
    
    return (
        <div className={sn.sneaker_cont_sneak}>
            {sneakers && sneakers.map((sne) => {
                return <div className={sn.sneaker_cont_sneak_shoes} key={sne.id}>
                    <img className={sn.sneaker_cont_sneak_shoes_pict} src={sne.imageURL[0]} alt="" />
                    <img className={sn.sneaker_cont_sneak_shoes_pict_hover} src={sne.imageURL_hover} alt="" />
                    <nav>{sne.imageURL.length}</nav>
                    <nav>{sne.name}</nav>
                </div>
            })}
        </div>
    )
}

export default MenShoesThings