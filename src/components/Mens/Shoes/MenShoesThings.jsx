import React from 'react'
import sn from '../../../scss/sneakers.module.scss'
import MenShoesSneak from './MenShoesSneak'

const MenShoesThings = ({ sneakers, search }) => {
    console.log(sneakers)
    return (
        
        <div className={sn.sneaker_cont_sneak}>
            {sneakers && sneakers.filter((obj) => {
        if (obj.name.toLowerCase().includes(search.toLowerCase())) {
            return true
        } 
        return false
    }).map((sne) => {
        return <MenShoesSneak imageURL_hover={sne.imageURL_hover} name={sne.name} imageURL={sne.imageURL} id={sne.id} key={sne.id} />
    }) }
        </div>
    )
}

export default MenShoesThings