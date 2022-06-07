import { BsArrowLeft } from 'react-icons/bs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mensShoesCateg } from '../../../data/data'
import { fetchInfoCategory, fetchShoes, setMenCategory } from '../../../redux/action/nemshoes-action'
import sn from '../../../scss/sneakers.module.scss'
import '../../../scss/active.scss'
import MenShoesThings from './MenShoesThings'
import MyLoader from '../../ShoesLoader'

const MenShoes = React.memo(() => {
    const { sneakers, category, isLoading, infoCategory } = useSelector(({ sneak }) => sneak)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchShoes(category))
        dispatch(fetchInfoCategory(category))
    }, [category])

    const setCateg = (categ) => {
        dispatch(setMenCategory(categ))
    }


    return (
        <div className={sn.sneaker}>
            <div className={sn.sneaker_cont}>
                <Link className={sn.sneaker_cont_back} to='/men'>
                    <BsArrowLeft />
                    <nav>Back</nav>
                </Link>
                {
                    infoCategory && infoCategory.map((info) => {
                        return <nav key={info.header}>
                            <h3 className={sn.sneaker_cont_log}>{info.header}</h3>
                            <p className={sn.sneaker_cont_title}>{info.text}</p>
                        </nav>
                    })
                }

                <div className={sn.sneaker_cont_category}>
                    <div onClick={() => setCateg(0)} className={category === 0 ? 'sneaker_active' : 'sneaker_inner'}>
                        All Men's Shoes
                    </div>
                    {mensShoesCateg && mensShoesCateg.map((mencat) => {
                        return <nav onClick={() => setCateg(mencat.id)} className={category === mencat.id ? 'sneaker_active' : 'sneaker_inner'} key={mencat.shoes}>
                            {mencat.shoes}
                        </nav>
                    })}

                </div>
                <>
                    {isLoading ? <MenShoesThings sneakers={sneakers} /> : <MyLoader />}
                </>
                {
                    infoCategory.map((footer) => {
                        return <nav key={footer.footer_header}>
                            <h3 className={sn.sneaker_cont_log}>{footer.footer_header}</h3>
                            <p>{footer.footer_text}</p>
                            <h3 className={sn.sneaker_cont_log}>{footer.footer_header_title}</h3>
                            <p>{footer.footer_text_title}</p>
                        </nav>
                    })
                }
            </div>
        </div>
    )
})

export default MenShoes