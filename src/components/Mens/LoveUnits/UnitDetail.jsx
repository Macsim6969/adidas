import axios from 'axios'
import {BsArrowLeft} from 'react-icons/bs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { removeUnit, setUnit } from '../../../redux/action/units-action'
import u from '../../../scss/unitDet.module.scss'

const UnitDetail = () => {
    const dispatch = useDispatch()
    const unit = useSelector((state) => state.unitDetails.unit)
    const { id } = useParams()
    console.log(unit)

    useEffect(() => {
        axios.get(`http://localhost:3001/love/${id}`).then(resp => {
            dispatch(setUnit(resp.data))
        })
        dispatch(removeUnit())
    }, [id])


    return (
        <div className={u.unit}>
            {unit && (
                <div className={u.unit_content}>
                    <div className={u.unit_content_lf}>
                        <img className={u.unit_content_lf_inf} src={unit.imageURL[0]} alt="" />
                        <p className={u.unit_content_lf_data}>{unit.data}</p>
                        <Link className={u.unit_return} to='/pride'>
                            <BsArrowLeft className={u.unit_return_arrow}/>
                            <p className={u.unit_return_back}>Back</p></Link>
                    </div>

                    <div className={u.unit_content_rg}>
                        <p>{unit.category}</p>
                        <p className={u.unit_content_rg_title}>{unit.title}</p>
                        <p className={u.unit_content_rg_price}>${unit.price}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UnitDetail