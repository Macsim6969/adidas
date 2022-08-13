import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { size } from '../../../../data/data'
import d from '../../../../scss/details.module.scss'
import '../../../../scss/active.scss'
import { setChoiceSize } from '../../../../redux/action/info-action'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useState } from 'react'
import classNames from 'classnames'
import { setObj } from '../../../../redux/action/cart-action'

const MenDetailsRight = ({image}) => {
    const dispatch = useDispatch()
    const { things } = useSelector((state) => state.sneak)
    const { categ, discount, price, sizes, name, details, id } = things


    const [choiceSizes, setChoiceSizes] = useState(null)

    const choiceSize = (e) => {
        dispatch(setChoiceSize(e))
        setChoiceSizes(e)
    }


    const setCart = (obj) =>{
        dispatch(setObj(obj))
    }
    
    return (
        <div className={d.details_images_right}>
            <div className={d.details_images_right_fix}>
                <nav className={d.details_images_right_fix_categ}>{categ}</nav>
                <nav className={d.details_images_right_fix_name}>{name}</nav>
                {
                    discount === null ? <nav className={d.details_images_right_fix_price} >${price}</nav> : <> <nav className={d.details_images_right_fix_discount}>${discount}</nav> <nav className={d.details_images_right_fix_price} >${price}</nav></>

                }
                {
                    details &&
                    <p>{details.slice(-2)[0]}</p>
                }

                <p>Sizes</p>
                {
                    sizes &&
                    <div className={d.details_images_right_fix_sizeboks}>
                        {size.map((e, index) => {
                            return <nav onClick={() => choiceSize(e.size)} className={classNames({
                                activesize: choiceSizes === e.size,
                                diactivesize: !sizes.includes(index)
                            })} key={e.size}>{e.size}</nav>
                        })}
                    </div>
                }
                <div onClick={() => setCart({ name, price, discount , choiceSizes, image, id })} className={d.details_images_right_fix_button}>
                    <button className={d.details_images_right_fix_button_btn}   type='button'>ADD TO BAG</button>
                    <HiOutlineArrowNarrowRight />
                </div>


            </div>
        </div>
    )
}

export default MenDetailsRight