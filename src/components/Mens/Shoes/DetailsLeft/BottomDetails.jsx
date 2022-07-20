import React from 'react'
import { useState } from 'react'
import d from '../../../../scss/details.module.scss'

const BottomDetails = ({obj, log}) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <nav onClick={() => setShow(!show)} className={d.details_images_left_bottom_descriptions_log}>{log}</nav>
            {
                !show || obj && <div className={d.details_images_left_bottom_descriptions_main}>
                    <div className={d.details_images_left_bottom_descriptions_main_lf}>
                        <nav>{obj.name}</nav>
                        <nav>{obj.text}</nav>
                    </div>
                    <div className={d.details_images_left_bottom_descriptions_main_rg}>
                        <nav>
                            <img src={obj.image} alt="" />
                        </nav>
                    </div>
                </div>
            }
        </>
    )
}

export default BottomDetails