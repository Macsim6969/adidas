import axios from 'axios'
import d from '../../../scss/details.module.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setGalleryDop, setSneackGallery, setThing, setThings } from '../../../redux/action/nemshoes-action'
import MenDetailsDopInfo from './MenDetailsDopInfo'
import '../../../scss/active.scss'
import MenDetailsRight from './DetailsRight/MenDetailsRight'
import BottomDetails from './DetailsLeft/BottomDetails'
import BottomDetailsHiglight from './DetailsLeft/BottomDetailsHiglight'
import BottomDet from './DetailsLeft/BottomDet'


const MenDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { galleryChoice, things } = useSelector((state) => state.sneak)
    const { video, galleryDop, higlights, descriptions, details } = things
    const [image, setImage] = useState([])
    const [dopImage, setDopImage] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/shoes/?id=${id}`).then(resp => {
            dispatch(setThings(resp.data[0]))
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

    const addZoom = () => {
        if (document.querySelector('img').classList.contains('z')) {
            document.querySelector('img').classList.remove('z')
            document.querySelector('img').classList.add('zoom')

        } else {
            document.querySelector('img').classList.remove('zoom')
            document.querySelector('img').classList.add('z')

        }
    }


    return (
        <div className={d.details}>
            <div className={d.details_images}>
                <div className={d.details_images_left}>
                    <Link to={'/men-sneakers'} >Back</Link>
                    <div className={d.details_images_left_main}>
                        <img onClick={() => addZoom()} src={image} alt="" className='z' />
                    </div>
                    <nav className={d.details_images_left_dop}>
                        {
                            galleryChoice && <nav>{galleryChoice.length} color available</nav>

                        }
                        {
                            galleryChoice && galleryChoice.map((e, index) => {
                                return <img className={e === image ? 'active' : ''} onClick={() => oneClick(e, index)} key={index} src={e} alt="" />
                            })
                        }
                    </nav>
                    {/* <div className={d.details_images_left_detai_v}>
                        {
                            video && video[0].map(v => {
                                return <nav key={v}><video src={v.info} autoPlay={true}></video></nav>
                            })
                        }
                    </div> */}
                    <nav className={d.details_images_left_image_two}>
                            {galleryDop && dopImage.slice(0, 2).map((dop) => {
                                return <div>
                                    <img src={dop} alt="" />
                                </div>

                            })}
                        </nav>
                    <div className={d.details_images_left_show}>
                        {showDopImage &&
                            <MenDetailsDopInfo oneClick={oneClick} dopImage={dopImage} />}
                        {
                            showDopImage ? <button className={d.details_images_left_show_btn} onClick={() => setShowDopImage(!showDopImage)}>Less</button> : <button className={d.details_images_left_show_btn} onClick={() => setShowDopImage(!showDopImage)}>Show</button>
                        }
                    </div>
                    <div className={d.details_images_left_bottom}>
                        <div className={d.details_images_left_bottom_hig}>
                            <BottomDetailsHiglight obj={higlights} log={"Highlights"} />
                        </div>
                        <div className={d.details_images_left_bottom_descriptions}>
                            <BottomDetails log={"Descriptions"} obj={descriptions} />
                        </div>
                        <div className={d.details_images_left_bottom_det}>
                            <BottomDet log={"Details"} obj={details} />
                        </div>
                    </div>
                </div>
                <MenDetailsRight image={image} />
            </div>
        </div>
    )
}

export default MenDetails