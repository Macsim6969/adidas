import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setSneackGallery, setThing, setThings } from '../../../redux/action/nemshoes-action'


const MenDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { sneakers, gallery } = useSelector((state) => state.sneak)
    console.log(gallery)

    useEffect(() => {
        axios.get(`https://6293babe7aa3e6af1a102469.mockapi.io/adidas/menshoes/menshoes?id=${id}`).then(resp => {
            dispatch(setThings(resp.data[0]))
            dispatch(setSneackGallery(resp.data[0].imageURL))
        })
        dispatch(setThing())
    }, [id])
    return (
        <div>
            <Link to={'/men-sneakers'} >Back</Link>
            <h1>Sneakers</h1>
            {
                gallery && gallery.map(e => {
                    return <>
                        <img src={e} alt="" />
                        <nav>{e}</nav>
                    </>
                })
            }
        </div>
    )
}

export default MenDetails