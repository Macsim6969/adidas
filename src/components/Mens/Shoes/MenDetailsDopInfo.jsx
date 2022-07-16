import React from 'react'
import dop from '../../../scss/mendetdop.module.scss'
const MenDetailsDopInfo = ({ dopImage }) => {
    
    return (
        <div className={dop.dop_image}>
            <nav>
                {
                    dopImage && dopImage.filter(item => item < 3).map(d => {
                        return <img className={dop.image} key={d} src={d} alt={d} />
                    })
                }
            </nav>
        </div>
    )
}

export default MenDetailsDopInfo