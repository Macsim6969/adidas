import React, { useState } from 'react'
import sn from '../../../scss/sneakers.module.scss'

const MenHoverImage = ({ image, imageHover, colorChange  }) => {
    // const [colorChange, setColorChange] =useState(true)
    const [hover, setHover] = useState(image[0])
    
    const setHoverCheck = () =>{
        setHover(imageHover)
    }
    const setMoveCheck = () =>{
        setHover(image[0])
    }
    return (
        <>
            <img className={sn.sneaker_cont_sneak_shoes_pict} onMouseMove={() => { setHoverCheck()}} onMouseLeave={() => { setMoveCheck() }} src={hover} alt="" />
            {
                colorChange && <nav className={sn.sneaker_cont_sneak_shoes_pict_inner}>
                {image.map(e =>{
                   return <img key={e} className={sn.sneaker_cont_sneak_shoes_pict_inner_img} onMouseMove={()=>{setHover(e)}} src={e} alt="" />
                })}
            </nav>
            }
            
        </>
    )
}

export default MenHoverImage