import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { removeUnit, setGallery, setSizeBy, setUnit } from '../../../redux/action/units-action'
import u from '../../../scss/unitDet.module.scss'
import { sizes } from '../../../data/data'
import '../../../index.scss'
import UnitDetailInfo from './UnitDetailInfo'

const UnitDetail = () => {
    const dispatch = useDispatch()
    const { unit, gallery, sizeBy } = useSelector((state) => state.unitDetails)
    const { id } = useParams()
 
    const [images, setImages] = useState()

    useEffect(() => {
        axios.get(`https://6293babe7aa3e6af1a102469.mockapi.io/adidas/menshoes/love?id=${id}`).then(resp => {
            dispatch(setUnit(resp.data[0]))
            dispatch(setGallery(resp.data[0].imageURL))
            setImages(resp.data[0].imageURL[0])
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
                    <div className={u.unit_content_inner}>
                        <div className={u.unit_content_inner_lf}>
                            <img className={u.unit_content_inner_lf_inf} src={images} alt="" />
                            <p className={u.unit_content_inner_lf_data}>{unit.data}</p>
                            <Link className={u.unit_return} to='/pride'>
                                <BsArrowLeft className={u.unit_return_arrow} />
                                <p className={u.unit_return_back}>Back</p>
                            </Link>
                            <div className={u.unit_img_size}>
                                {/* <p>Colors: {unit.imageURL.length}</p> */}
                                <div className={u.unit_img_size_change}>
                                    {gallery && gallery.map((i, index) => {
                                        return <img key={i} onClick={() => setImages(i)} className={images === i ? 'img_active' : 'img_look'} src={i} alt="" />
                                    })}
                                </div>
                            </div>
                        </div>
                        <UnitDetailInfo images={images} {...unit} />
                    </div>
                    <div className={u.unit_content_in}>
                        <div className={u.unit_content_in_rg}>
                            <p>{unit.category}</p>
                            <p className={u.unit_content_in_rg_title}>{unit.title}</p>
                            <p className={u.unit_content_in_rg_price}>${unit.price}</p>
                            <div className={u.unit_content_size}>
                                {
                                    sizes && sizes.map((s, index) => {
                                        return <nav key={s.size} onClick={() => { setSize(index) }} className={sizeBy === index ? 'size_active' : 'inner'}>
                                            {s.size}
                                        </nav>
                                    })
                                }
                            </div>
                            <div className={u.unit_content_in_rg_bag}>
                                ADD TO BAG
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UnitDetail