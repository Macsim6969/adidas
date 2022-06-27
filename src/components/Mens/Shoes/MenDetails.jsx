import axios from 'axios'
import d from '../../../scss/details.module.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setGalleryDop, setSneackGallery, setThing, setThings } from '../../../redux/action/nemshoes-action'
import MenDetailsDopInfo from './MenDetailsDopInfo'


const MenDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { galleryChoice, things } = useSelector((state) => state.sneak)

    const [image, setImage] = useState([])
    const [dopImage, setDopImage] = useState([])
    useEffect(() => {
        axios.get(`https://6293babe7aa3e6af1a102469.mockapi.io/adidas/menshoes/menshoes?id=${id}`).then(resp => {
            dispatch(setThings(resp.data[0]))
            console.log(resp.data[0].imageURL[0], 'image')
            dispatch(setSneackGallery(resp.data[0].imageURL))
            setImage(resp.data[0].imageURL[0])
            dispatch(setGalleryDop(resp.data[0].galleryChoiceThing))
            setDopImage(resp.data[0].galleryDop[0].info)

        })
        dispatch(setThing())
    }, [id])

    const oneClick = (e, index) => {
        setImage(e)
        setDopImage(things.galleryDop[index].info)
    }

    const [showDopImage, setShowDopImage] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showInfoDescrp, setShowInfoDescrp] = useState(false)
    const [showInfoDet, setShowInfoDet] = useState(false)

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
                            galleryChoice && galleryChoice.map((e, index) => {
                                return <img className={e === image ? 'active' : ''} onClick={() => oneClick(e, index)} key={index} src={e} alt="" />
                            })
                        }
                    </nav>
                    {showDopImage &&
                        <MenDetailsDopInfo oneClick={oneClick} dopImage={dopImage} />}
                    {
                      showDopImage ? <button onClick={() => setShowDopImage(!showDopImage)}>Less</button> : <button onClick={() => setShowDopImage(!showDopImage)}>Show</button> 
                    }
                    <div className={d.details_images_left_under}>
                        <div className={d.details_images_left_under_higlights}>
                            <p onClick={() => setShowInfo(!showInfo)}>Highlights</p>
                            {
                                showInfo && <div>
                                    <h5>INCREDIBLE ENERGY RETURN</h5>
                                    <nav>Hundreds of Boost capsules fused together and ready to explode with energy in each step.</nav>
                                </div>

                            }
                        </div>
                        <div className={d.details_images_left_under_higlights}>
                            <p onClick={() => setShowInfoDescrp(!showInfoDescrp)}>Description</p>
                            {
                                showInfoDescrp && <div>
                                    <h5>SAY HELLO TO INCREDIBLE ENERGY RETURN</h5>
                                    <nav>The evolution of our legendary torsion system. Fitted to the outsole for a responsive stride.</nav>
                                </div>

                            }
                        </div>
                        <div className={d.details_images_left_under_higlights}>
                            <p onClick={() => setShowInfoDet(!showInfoDet)}>Details</p>
                            {
                                showInfoDet && <div>
                                    <h5>SAY HELLO TO INCREDIBLE ENERGY RETURN</h5>
                                    <nav>The evolution of our legendary torsion system. Fitted to the outsole for a responsive stride.</nav>
                                </div>

                            }
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default MenDetails