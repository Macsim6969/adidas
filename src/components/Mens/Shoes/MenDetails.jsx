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


const MenDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { galleryChoice, things } = useSelector((state) => state.sneak)
    const {galleryDop} = things
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
                        <img src={image} alt="" className='z' onClick={() => addZoom()} />
                    </div>
                    <nav className={d.details_images_left_dop}>
                        {
                            galleryChoice && galleryChoice.map((e, index) => {
                                return <img className={e === image ? 'active' : ''} onClick={() => oneClick(e, index)} key={index} src={e} alt="" />
                            })
                        }
                    </nav>
                    {/* <nav>
                        {galleryDop && dopImage.info.slice(0, 2).map((dop) =>{
                            return  <img src={dop} alt="" />
                            
                        })}
                    </nav> */}
                    <div className={d.details_images_left_show}>
                        {showDopImage &&
                            <MenDetailsDopInfo oneClick={oneClick} dopImage={dopImage} />}
                        {
                            showDopImage ? <button onClick={() => setShowDopImage(!showDopImage)}>Less</button> : <button onClick={() => setShowDopImage(!showDopImage)}>Show</button>
                        }
                    </div>

                    {/* {
                        things && things.map(er =>{
                            <nav>{er.descriptions}</nav>
                        })
                    } */}
                </div>
                <MenDetailsRight image={image} />
            </div>
        </div>
    )
}

export default MenDetails