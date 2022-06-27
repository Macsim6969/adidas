import React from 'react'
import dop from '../../../scss/mendetdop.module.scss'
const MenDetailsDopInfo = ({ dopImage }) => {
    
    return (
        <div>
            <nav>
                {
                    dopImage && dopImage.map(d => {
                        return <img className={dop.image} key={d} src={d} alt={d} />
                    })
                }
            </nav>
        </div>
    )
}

export default MenDetailsDopInfo