import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => {
  return (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='Background_G_image' />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img'/>
        <p className='p__opensans'>Our skilled chefs use fresh, local ingredients to craft delicious dishes that blend classic and modern flavors. We aim to provide warm hospitality and attentive service, making every visit special. Join us for a meal that delights your senses and leaves you with lasting memories.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife__image' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img'/>
        <p className='p__opensans'>Starting as a small family eatery, we have grown by focusing on quality and tradition. We blend classic recipes with modern flavors, honoring our roots while embracing the future. Our story is one of passion, growth, and dedication to creating unforgettable dining experiences.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
    
  </div>
  )
};

export default AboutUs;
