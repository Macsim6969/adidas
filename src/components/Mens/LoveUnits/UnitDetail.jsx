import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setUnit } from '../../../redux/action/units-action'

const UnitDetail = () => {
    const dispatch = useDispatch()
    const unit = useSelector((state) => state.unitDetails.unit)
    const { id } = useParams()
    console.log(unit)

    useEffect(()=>{
        axios.get(`http://localhost:3001/love/${id}`).then(resp =>{
            dispatch(setUnit(resp.data))
        })
    }, [id])

    
    return (
        <div>
            {unit && (
                <>
                <h1>{unit.category}</h1>
                <img src={unit.imageURL} alt="" />
                </>
            )}
        </div>
    )
}

export default UnitDetail