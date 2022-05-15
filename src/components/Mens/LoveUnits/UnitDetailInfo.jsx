import React from 'react'
import info from '../../../scss/unitDetInfo.module.scss'

const UnitDetailInfo = (props) => {
    const { title, head, text, images, washing, instruction, information, info_dop, specification, specific, story, story_txt , width} = props
    return (
        <div className={info.info}>
            <div className={info.info_top} >
                <div className={info.info_top_head}>
                    <div className={info.info_top_head_block}>
                        <p className={info.info_top_head_block_title}>{title}</p>
                        <p className={info.info_top_head_block_head}>{head}</p>
                        <p className={info.info_top_head_block_text}>{text}</p>
                    </div>
                    <img className={info.info_top_head_img} src={images} alt="" />
                </div>
                <div className={info.info_top_dop}>
                    <div className={info.info_top_dop_instruction}>
                        <h3 className={info.info_top_dop_instruction_logo}>{washing}</h3>
                        <ul className={info.info_top_dop_instruction_inner}>
                            {instruction && instruction.map(n => {
                                return <li className={info.info_top_dop_instruction_inner_step}>
                                    <img className={info.info_top_dop_instruction_inner_step_img} src={n.img} alt={n.step} />
                                    <p>{n.step}</p>
                                </li>
                            })}

                        </ul>
                    </div>
                    <div className={info.info_top_dop_information}>
                        <h3 className={info.info_top_dop_information_logo}>{information}</h3>
                        <ul className={info.info_top_dop_information_inner}>
                            {info_dop && info_dop.map(n => {
                                return <li className={info.info_top_dop_information_inner_step}>
                                    <p>{n.dop}</p>
                                </li>
                            })}

                        </ul>
                    </div>
                </div>
                <div className={info.info_top_spec}>
                    <h3 className={info.info_top_spec_log}>{specification}</h3>
                    <ul className={info.info_top_spec_filt}>
                        {
                            specific && specific.map(s => {
                                return <li className={info.info_top_spec_filt_inner}>
                                    {s.spec}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={info.info_story}>
                {story && story.map(t => {
                    return <>
                        <img className={info.info_story_head} width={width} src={t.image} alt="" />
                    </>
                })}
                <p className={info.info_story_info}>{story_txt}</p>
            </div>
        </div>
    )
}

export default UnitDetailInfo