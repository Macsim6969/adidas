import React, { useState } from 'react'
import s from '../scss/shoes.module.scss'
import '../index.scss'
import classNames from 'classnames'

const ShoesSize = ({ sizes }) => {
    const size = [41, 42, 43, 43.5, 44]
    const [itemSize, setItemSize] = useState(sizes[0])

    const choiceSize = (index) => {
        setItemSize(index)
    }

    return (
        <div className={s.main_shoes_cart_choice_size}>
            {
                size.map((s, index) => {
                    return <nav key={s}
                        onClick={() => { choiceSize(index) }}
                        className={classNames({
                            shoes_active: itemSize === index,
                            shoes_blocked: !sizes.includes(s)
                        })
                        }>{s}</nav>
                })
            }

        </div>
    )
}

export default ShoesSize