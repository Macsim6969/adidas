import React, { useState } from 'react'
import sn from '../../../scss/sneakers.module.scss'
import MenHoverImage from './MenHoverImage'

const MenShoesThings = ({ sneakers }) => {
    const [colorChange, setColorChange] =useState(false)
    return (
        <div onMouseMove={()=> {setColorChange(true)}} onMouseLeave={() => {setColorChange(false)}} className={sn.sneaker_cont_sneak}>
            {sneakers && sneakers.map((sne) => {
                return <div className={sn.sneaker_cont_sneak_shoes} key={sne.id}>
                    <MenHoverImage colorChange={colorChange} setColorChange={setColorChange} image={sne.imageURL} imageHover={sne.imageURL_hover} />
                    <nav>{sne.imageURL.length}</nav>
                    <nav>{sne.name}</nav>
                </div>
            })}
        </div>
    )
}

export default MenShoesThings