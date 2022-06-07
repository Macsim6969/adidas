import React from 'react'
import sn from '../../../scss/sneakers.module.scss'
import MenShoesSneak from './MenShoesSneak'

const MenShoesThings = ({ sneakers }) => {
    console.log(sneakers, 'sneakers')
    
    return (
        <div className={sn.sneaker_cont_sneak}>
            {sneakers && sneakers.map((sne) => {
                return <MenShoesSneak imageURL_hover={sne.imageURL_hover} name={sne.name} imageURL={sne.imageURL} id={sne.id} key={sne.id}/>
            })}
        </div>
    )
}

export default MenShoesThings