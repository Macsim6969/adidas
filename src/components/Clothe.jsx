import React, { useEffect, useRef, useState } from 'react'
import { category_cl } from '../data/data';
import c from '../scss/clother.module.scss'
import '../index.scss'
import axios from 'axios';
import ClotheContent from './ClotheContent';
import { useDispatch, useSelector } from 'react-redux';
import { setClothes } from '../redux/action/clother-action';

const Clothe = ({ item , onCLickItem }) => {
  const refC = useRef()
  const [activeLf, setActiveLf] = useState(null)
  const [activeCat, setActiveCat] = useState(0)
  const [activePopup, setActivePopup] = useState(false)
  const handleLf = (index) => {
    setActiveLf(index)
    onCLickItem(index)
  }

  const handlePopup = () => {
    setActivePopup(!activePopup)
  }

  const handleClickPopup = (index) => {
    setActiveCat(index)
    setActivePopup(false)
  }

  const block = item[activeCat]

  const returnedPopup = (e) => {
    if (!e.path.includes(refC.current)) {
      setActivePopup(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', returnedPopup)
  }, [])


  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:3001/db.json').then(resp => {
      dispatch(setClothes(resp.data.shoes))
    })
  }, [])
  const clothe = useSelector((state) => state.clother.items)

  return (
    <div ref={refC} className={c.clother_main}>
      <div className={c.clother_main_category}>
        <div className={c.clother_main_category_lf}>
          <nav onClick={() => { handleLf(null) }} className={activeLf === null ? 'active' : ''}>ALl</nav>
          {category_cl &&
            category_cl.map((c, index) => {
              return <nav onClick={() => { handleLf(index) }} className={activeLf === index ? 'active' : ''}>{c.cat}</nav>
            })}
        </div>
        <div className={c.clother_main_category_rg}>
          <nav onClick={handlePopup}>Find by:</nav>
          <nav>{block}</nav>
          {activePopup &&
            <div className={c.rg_popup}>
              {
                item &&
                item.map((s, index) => {
                  return <nav className={activeCat === index ? 'active' : ''} onClick={() => { handleClickPopup(index) }}>{s}</nav>
                })
              }
            </div>
          }
        </div>
      </div>
      <div className={c.clothe_content}>
        {
          clothe.map((cl) => {
            return <ClotheContent key={cl.id} {...cl} />
          })
        }
      </div>


    </div>
  )
}

export default Clothe;