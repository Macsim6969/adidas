import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setSneackGallery, setThing, setThings } from '../../../redux/action/nemshoes-action'


const MenDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { galleryChoice } = useSelector((state) => state.sneak)
    const [image , setImage] = useState([])
    useEffect(() => {
        axios.get(`https://6293babe7aa3e6af1a102469.mockapi.io/adidas/menshoes/menshoes?id=${id}`).then(resp => {
            dispatch(setThings(resp.data[0]))
            dispatch(setSneackGallery(resp.data[0].imageURL))
            setImage(resp.data[0].imageURL[0])
        })
        dispatch(setThing())
    }, [id])
    return (
        <div>
            <div>
                <Link to={'/men-sneakers'} >Back</Link>
                <img src={image} alt="" />
                <>
                    {
                        galleryChoice && galleryChoice.map(e => {
                            return <>
                                <img onClick={() =>setImage(e)} key={e} src={e} alt="" />
                            </>
                        })
                    }
                </>
            </div>
        </div>
    )
}

export default MenDetails