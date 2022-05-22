import { BsArrowLeft } from 'react-icons/bs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mensShoesCateg } from '../../../data/data'
import { fetchShoes, setMenCategory } from '../../../redux/action/nemshoes-action'
import sn from '../../../scss/sneakers.module.scss'
import '../../../scss/active.scss'
import MenShoesThings from './MenShoesThings'

const MenShoes = () => {
    const {sneakers, category} = useSelector(({sneak}) => sneak)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchShoes(category))
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
                <h3 className={sn.sneaker_cont_log}>MEN'S SNEAKERS</h3>
                <p className={sn.sneaker_cont_title}>From Ultraboost to Superstar, you can find the perfect men’s athletic shoes to fit your lifestyle. They’re made with your comfort in mind so you can put all of your focus into your next session.</p>
                <div className={sn.sneaker_cont_category}>
                    <div onClick={() => setCateg(null)} className={category === null ? 'sneaker_active' : 'sneaker_inner'}>
                        All Men's Shoes
                    </div>
                    {mensShoesCateg && mensShoesCateg.map((mencat, index) => {
                        return <nav onClick={() => setCateg(index)} className={category === index ? 'sneaker_active' : 'sneaker_inner'} key={mencat.shoes}>
                            {mencat.shoes}
                        </nav>
                    })}
                </div>
                <MenShoesThings sneakers={sneakers}/>
            </div>
        </div>
    )
}

export default MenShoes