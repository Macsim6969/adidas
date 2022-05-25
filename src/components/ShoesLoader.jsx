import React from "react"
import Loader from '../img/Loader.svg'
import l from '../scss/loader.module.scss'

const MyLoader = () => {
  return (
    <div className={l.loader}>
      <img src={Loader} alt="Loader" />
    </div>
  )
}



export default MyLoader