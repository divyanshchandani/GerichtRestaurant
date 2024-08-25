import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => {
  return(
  <div className='app__bg app__wrapper section__padding'>

    <div className='app__wrapper_img app__wrapper__img-reverse'>
      <img src={images.chef} alt='chef__image'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='Quote'/>
          <p className='p__opensans'>At Gericht, we embrace the art of culinary storytelling.</p>
        </div>
        <p className='p__opensans'>Our team of dedicated chefs combines traditional techniques with innovative flair, using only the freshest, locally sourced ingredients to create an unforgettable dining experience. From the first bite to the last, every flavor and texture is thoughtfully balanced to delight and inspire. We invite you to join us on a journey of taste.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='Sign' />
      </div>
    </div>
  </div>
  )
}

export default Chef;
