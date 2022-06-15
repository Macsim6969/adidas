import axios from 'axios'
import d from '../../../scss/details.module.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setSneackGallery, setThing, setThings } from '../../../redux/action/nemshoes-action'


const MenDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { galleryChoice , info } = useSelector((state) => state.sneak)
    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(`https://6293babe7aa3e6af1a102469.mockapi.io/adidas/menshoes/menshoes?id=${id}`).then(resp => {
            dispatch(setThings(resp.data[0]))
            dispatch(setSneackGallery(resp.data[0].imageURL))
            setImage(resp.data[0].imageURL[0])
        })
        dispatch(setThing())
    }, [id])


    const [infos , setInfos] = useState()
    useEffect(() =>{
       
            axios.get(`https://6293babe7aa3e6af1a102469.mockapi.io/adidas/menshoes/menshoes?imageURL=${infos}`).then(resp =>{
                console.log(infos, 'id' )
            })
       
    }, [infos])
    return (
        <div className={d.details}>
            <div className={d.details_images}>
                <div className={d.details_images_left}>
                    <Link to={'/men-sneakers'} >Back</Link>
                    <div className={d.details_images_left_main}>
                        <img src={image} alt="" />
                    </div>
                    <nav className={d.details_images_left_dop}>
                        {
                            galleryChoice && galleryChoice.map((e , index) => {
                                return <img className={e === image ? 'active' : ''} onMouseDown={() => setInfos(index)} onClick={() => setImage(e)} key={e} src={e} alt="" />
                            })
                        }
                    </nav>
                    <nav>
                        
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default MenDetails