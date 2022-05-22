import React from 'react'
import { BsFacebook, BsPinterest } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import blog from '../../img/blog/blog_unit.jpg'
import blog_info from '../../img/blog/block_info.jpg'
import blog_info2 from '../../img/blog/blog_info2.jpg'
import blog_info3 from '../../img/blog/blog_info3.webp'
import bl from '../../scss/unit_blog.module.scss'
import { Link } from 'react-router-dom'

const UnitBlog = () => {
  return (
    <div className={bl.blog}>
      <div className={bl.blog_header}>
        <img className={bl.blog_header_inner} src={blog} alt='blog' />
      </div>
      <div className={bl.blog_main}>
        <div className={bl.blog_main_cont}>
          <div className={bl.blog_main_cont_data}>
            <div className={bl.blog_main_cont_data_left}>
              <nav>ADIDAS /</nav>
              <nav>MAY 2022 /</nav>
            </div>
            <div className={bl.blog_main_cont_data_right}>
              <nav>
                <BsFacebook />
              </nav>
              <nav>
                <AiFillTwitterCircle />
              </nav>
              <nav>
                <BsPinterest />
              </nav>
              <nav>
                <HiOutlineMail />
              </nav>
            </div>
          </div>
          <div className={bl.blog_main_cont_inform}>
            <h2 className={bl.blog_main_cont_inform_title}>ADIDAS X KRIS ANDREW SMALL</h2>
            <p className={bl.blog_main_cont_inform_undertitle}>We're honored to collaborate with queer Australian artist, Kris Andrew Small, in support of the LGBTQIA+ community.</p>
            <p className={bl.blog_main_cont_inform_title_inner}>Kris Andrew Small, a native of Sydney, Australia is known for creating works of art with a joyful explosion of colors and patterns. He often attaches meaning to his art, using it to channel societal issues, and to create positive change, like increasing LGBTQIA+ awareness and acceptance.</p>
            <p className={bl.blog_main_cont_inform_title_inner}>Our goal for the collection was to bring visibility to the many voices of the LGBTQIA+ community, honoring those who continue to push society forward. We’re excited to continue our partnerships with two very important and impactful organizations that both work tirelessly to create impactful change. Athlete Ally is focused on ending homophobia and transphobia in sport; and Stonewall UK has spent the last 30 years positively transforming the lives of many in the LGBTQIA+ community.</p>
            <img src={blog_info} alt="" />
            <p className={bl.blog_main_cont_inform_title_inner}>Kris Andrew Small’s work spreads a message of empowerment and support for the LGBTQIA+ community. He finds comfort in all the facets of his identity and reality through creating, and encourages others to do the same. Inspired by the pop art and graphic design of the ‘70s and ‘80s, this era shaped his perception as a creative. Kris uses his practice to uplift and educate, and provide a voice for those unable to use theirs. In his often abstract patterns and illustrations are hidden messages of acceptance and self-love; and allowing that to guide your artistic vision.</p>
            <p className={bl.blog_main_cont_inform_concept}>
              From a concept point of view I really wanted this collection to celebrate all the amazing sides of being queer and celebrating how far we as a community have come, but also reminding people that there are still so many people in the community that are vulnerable and repressed
            </p>
            <p className={bl.blog_main_cont_inform_title_inner}>- Kris Andrew Small</p>
            <p className={bl.blog_main_cont_inform_title_inner}>Kris encourages budding artists to lean into their own identity for inspiration. "When I was younger that I was so scared to be Queer, what gave me strength was when I started actually showing that side of me and putting it in my work, it made me feel liberated and free."</p>
            <p className={bl.blog_main_cont_inform_title_inner}>Kris crafted this collection to represent and connect with the LGBTQIA+ community.</p>
            <img src={blog_info2} alt="" />
            <p className={bl.blog_main_cont_inform_title_inner}>In the creation of this collection, Kris leaned into familiar visuals to create his own. “From a creative point I just wanted it to be a big celebration of movement, color and joy. I also wanted it to be a bit of reworking of the traditional rainbow / pride visual language we are so used to seeing.”</p>
            <p className={bl.blog_main_cont_inform_concept}>
              When I was younger that I was so scared to be Queer, what gave me strength was when I started actually showing that side of me and putting it in my work, it made me feel liberated and free.
            </p>
            <p className={bl.blog_main_cont_inform_title_inner}>- Kris Andrew Small</p>
            <img src={blog_info3} alt="" />
            <p className={bl.blog_main_cont_inform_concept}>
              From a creative point I just wanted it to be a big celebration of movement, color and joy. I also wanted it to be a bit of reworking of the traditional rainbow / pride visual language we are so used to seeing.
            </p>
            <p className={bl.blog_main_cont_inform_title_inner}>- Kris Andrew Small</p>
            <div>
              <Link to={'/pride'}>Shop now</Link>
            </div>
          </div>
          <div className={bl.blog_main_cont_data}>
            <div className={bl.blog_main_cont_data_left}>
              <nav>ADIDAS /</nav>
              <nav>MAY 2022 /</nav>
            </div>
            <div className={bl.blog_main_cont_data_right}>
              <nav>
                <BsFacebook />
              </nav>
              <nav>
                <AiFillTwitterCircle />
              </nav>
              <nav>
                <BsPinterest />
              </nav>
              <nav>
                <HiOutlineMail />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnitBlog