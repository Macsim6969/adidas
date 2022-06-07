import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sn from '../../../scss/sneakers.module.scss'
import MenHoverImage from './MenHoverImage'

const MenShoesSneak = React.memo(({imageURL_hover, name, imageURL, id}) => {
    
    const [colorChange, setColorChange] = useState(false)
    return (
        <Link to={`/${id}`}>
            <div onMouseMove={() => { setColorChange(true) }} onMouseLeave={() => { setColorChange(false) }} className={sn.sneaker_cont_sneak_shoes} >
                <MenHoverImage colorChange={colorChange} setColorChange={setColorChange} image={imageURL} imageHover={imageURL_hover} />
                <nav>{imageURL.length}</nav>
                <nav>{name}</nav>
            </div>
        </Link>
    )
})

export default MenShoesSneak