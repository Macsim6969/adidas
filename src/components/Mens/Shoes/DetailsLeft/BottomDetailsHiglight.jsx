import React, { useState } from 'react'
import d from '../../../../scss/details.module.scss'

const BottomDetailsHiglight = ({ obj, log }) => {
    {
        obj && obj.map(e => { return e.hi }) 
    }

    const [show, setShow] = useState(false)
    return (
        <>
            <nav onClick={() => setShow(!show)} className={d.details_images_left_bottom_hig_log}>{log}</nav>
            <div className={d.details_images_left_bottom_hig_main}>
            {
                !show || obj && obj.map(h => {
                    return <div key={h.hi.name} className={d.details_images_left_bottom_hig_main_inner}>
                            <nav className={d.details_images_left_bottom_hig_main_inner_blog}>
                                <img className={d.details_images_left_bottom_hig_main_inner_blog_img} src={h.hi.image} alt="" />
                            </nav >
                            <nav className={d.details_images_left_bottom_hig_main_inner_name}>{h.hi.name}</nav>
                            <nav className={d.details_images_left_bottom_hig_main_inner_text}>{h.hi.text}</nav>
                        </div>
                })

            }
             </div>
        </>
    )
}

export default BottomDetailsHiglight