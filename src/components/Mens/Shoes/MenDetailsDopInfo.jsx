import React from 'react'
import dop from '../../../scss/mendetdop.module.scss'
const MenDetailsDopInfo = ({ dopImage }) => {
    return (
        <div className={dop.dop_image}>      
                {
                    dopImage && dopImage.slice(2).map(d => {
                        return <div key={d}>
                            <img className={dop.image}  src={d} alt={d} />
                        </div>

                    }) 
                }
        </div>
    )
}

export default MenDetailsDopInfo