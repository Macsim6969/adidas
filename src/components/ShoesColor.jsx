import React, { useState } from 'react'
import s from '../scss/shoes.module.scss'
import '../index.scss'
import classNames from 'classnames'

const ShoesColor = ({color}) => {
    const typeColors = ['White', 'Black']
    const [colorItem, setColorItem] = useState(color[0])

    const changeColor = (index) => {
        setColorItem(index)
    }
    return (
        <div className={s.main_shoes_cart_choice_color}>
            {typeColors.map((colors, index) => {
                return <nav
                    key={colors}
                    onClick={() => changeColor(index)}
                    className={classNames({
                        shoes_active : colorItem === index,
                        shoes_blocked : !color.includes(index) 
                    })}>{colors}</nav>
            })
            }
        </div>
    )
}

export default ShoesColor