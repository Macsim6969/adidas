import React, { useState } from 'react'
import d from '../../../../scss/details.module.scss'

const BottomDet = ({obj, log}) => {
    const [show, setShow] = useState(false)
  return (
    <>
            <nav onClick={() => setShow(!show)} className={d.details_images_left_bottom_hig_log}>{log}</nav>
            <div className={d.details_images_left_bottom_det_main}>
            {
                !show || obj && obj.map(h => {
                    return <ul className={d.details_images_left_bottom_det_main_inner}>    
                                <li>{h}</li>            
                        </ul>
                })

            }
             </div>
        </>
  )
}

export default BottomDet