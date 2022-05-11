import axios from 'axios'
import unit_content from '../../../img/mans/love/unit_content.jpg'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUnits } from '../../../redux/action/units-action'
import l from '../../../scss/love.module.scss'
import Unit from './Unit'

const LoveUntits = () => {
    const dispatch = useDispatch()
    const units = useSelector((state) => state.unit.units )
    useEffect(() => {
        axios.get('http://localhost:3001/love').then(({ data }) => {
            dispatch(setUnits(data))
        })
    }, [])
    return (
        <div className={l.units_new}>
            <div className={l.units_new_banner}>
                <h1 className={l.units_new_banner_log}>Love Units</h1>
            </div>
            <div className={l.units_product}>
                {units && units.map(p => {
                   return <Unit key={p.id} id={p.id} imageURL={p.imageURL} price={p.price} title={p.title} category={p.category} />
                })}
            </div>
            <div className={l.units_content}>
                <img src={unit_content} alt="" />
                <div className={l.units_content_to}>
                    <p>45454545454545</p>
                </div>
            </div>
        </div>
    )
}

export default LoveUntits