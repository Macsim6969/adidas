import classNames from 'classnames'
import React, { useState } from 'react'
import c from '../scss/clother.module.scss'
import '../index.scss'

const ClotheContent = ({ name, imageURL, color, sizes }) => {
    
    const avaibleSize = [41, 42, 43, 43.5, 44]
    const avaibleColor = ['White', 'Black']
    const [itemColor, setItemColor] = useState(color[0])
    
    const [itemSize, setItemSize] = useState(color[0])

    const ClickColor = (index) =>{
        setItemColor(index)
    }

    const ClickSize = (index) =>{
        setItemSize(index)
    }

    
    return (
        <div className={c.clothe_content_block}>
            <nav>{name}</nav>
            <img src={imageURL} alt="" />
            <div className={c.clothe_content_block_cat}>
                {
                    avaibleColor.map((colors, index) => {
                        return <nav 
                        onClick={() =>{ClickColor(index)}}
                        className={classNames({
                            shoes_active: itemColor === index,
                            shoes_blocked: !color.includes(index) 
                        })}
                        >{colors}</nav>
                    })
                }
            </div>
            <div className={c.clothe_content_block_cat}>
                {
                    avaibleSize.map((size, index) =>{
                        return <nav onClick={() =>{ClickSize(index)}} className={classNames({
                            shoes_active: itemSize === index,
                            shoes_blocked: !sizes.includes(size)
                        })}>{size}</nav>
                    })
                }
            </div>

        </div>
    )
}

export default ClotheContent