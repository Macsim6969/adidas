import React from 'react'
import { Link } from 'react-router-dom'
import { mens_story } from '../../../data/data'
import s from '../../../scss/menstory.module.scss'

const MensCategStory = () => {
    return (
        <div className={s.story}>
            {
                mens_story && mens_story.map((st) => {
                    return <div className={s.story_categ}>
                        <Link className={s.story_categ_story} to={st.link}>
                            <img className={s.story_categ_story_img} src={st.imageULR} alt={st.title} />
                            <p className={s.story_categ_story_title}>{st.title}</p>
                            <p className={s.story_categ_story_text}>{st.text}</p>
                            <p className={s.story_categ_story_link}>{st.linkTo}</p>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default MensCategStory