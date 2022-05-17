import React, { useEffect, useState } from 'react'
import { categorys } from '../data/data'
import s from '../scss/shoes.module.scss'
import '../index.scss'
import { AiFillCaretDown } from 'react-icons/ai'  
import ShoesContent from './ShoesContent'
import { useDispatch, useSelector } from 'react-redux'
import MyLoader from './ShoesLoader'
import { fetchShoes } from '../redux/action/shoes-action'


const Shoes = ({ category_rg, onCLickCategory, onClickSortBy }) => {
  const dispatch = useDispatch()

  const { category, sortBy } = useSelector(({ filter }) => filter)

  const [sort, setSort] = useState(false) 
  const showSort = () => {
    setSort(!sort)
  }

  const activeName = category_rg.find((obj) => obj.type === sortBy).name

  const onSelectPopup = (index) => {
    onClickSortBy(index)
    setSort(false)
  }

  const isLoading = useSelector((state) => state.shoes.isLoading)
  
  useEffect(() => {
    dispatch(fetchShoes(category, sortBy))
  }, [category, sortBy])


  return (
    <div className={s.main}>
      <h1 className={s.log}>Shoes</h1>
      <div className={s.main_category}>
        <div className={s.main_category_left}>
          <nav className={category === null ? 'active' : ''} onClick={() => onCLickCategory(null)} >All</nav>
          {categorys && categorys.map((c, index) => {
            return <nav onClick={() => onCLickCategory(index)} className={category === index ? 'active' : ''} key={c.cat}>{c.cat}</nav>
          })}

        </div>
        <div className={s.main_category_rg}>
          <div onClick={showSort} className={s.category_rg}>
            <AiFillCaretDown className={sort ? 'ic_w' : ''} />
            <nav className={s.category_rg_click}>Sort by:</nav>
            <nav className={s.category_rg_click}>{activeName}</nav>
          </div>
          {sort &&
            <div className={s.category_rg_scr}>
              {category_rg &&
                category_rg.map((obj, index) => {
                  return <nav key={obj.type} onClick={() => onSelectPopup(obj.type)} className={sortBy === obj.type ? 'active_ct' : ''}>{obj.name}</nav>
                })}
            </div>
          }
        </div>
      </div> 
      <div className={s.main_shoes}>
        {isLoading ? <ShoesContent /> : <MyLoader />}


      </div>
    </div>
  )
}

export default Shoes