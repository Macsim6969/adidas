import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { removeUnit, setGallery, setSizeBy, setUnit } from '../../../redux/action/units-action'
import u from '../../../scss/unitDet.module.scss'
import { sizes } from '../../../data/data'
import '../../../index.scss'

const UnitDetail = () => {
    const dispatch = useDispatch()
    const { unit, gallery, sizeBy } = useSelector((state) => state.unitDetails)
    const { id } = useParams()
    
    const [images, setImages] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3001/love/${id}`).then(resp => {
            dispatch(setUnit(resp.data))
            dispatch(setGallery(resp.data.imageURL))
            setImages(resp.data.imageURL[0])
        })
        dispatch(removeUnit())
    }, [id])


    const setSize = (value) => {
        dispatch(setSizeBy(value))
    }




    return (
        <div className={u.unit}>
            {unit && (
                <div className={u.unit_content}>
                    <div className={u.unit_content_lf}>
                        <img className={u.unit_content_lf_inf} src={images} alt="" />
                        <p className={u.unit_content_lf_data}>{unit.data}</p>
                        <Link className={u.unit_return} to='/pride'>
                            <BsArrowLeft className={u.unit_return_arrow} />
                            <p className={u.unit_return_back}>Back</p>
                        </Link>
                        <div>
                            <p>Colors: {unit.imageURL.length}</p>
                            {gallery && gallery.map((i) =>{
                                return <img key={i} onClick={() => setImages(i)}  className={u.img_look} src={i} alt="" />
                            })}
                        </div>
                    </div>

                    <div className={u.unit_content_rg}>
                        <p>{unit.category}</p>
                        <p className={u.unit_content_rg_title}>{unit.title}</p>
                        <p className={u.unit_content_rg_price}>${unit.price}</p>
                        <div className={u.unit_content_size}>
                            {
                                sizes && sizes.map((s, index) => {
                                    return <nav key={s.size} onClick={() => { setSize(index) }} className={sizeBy === index ? 'size_active' : 'inner'}>
                                        {s.size}
                                    </nav>
                                })
                            }
                        </div>
                        <div className={u.unit_content_rg_bag}>
                            ADD TO BAG
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UnitDetail