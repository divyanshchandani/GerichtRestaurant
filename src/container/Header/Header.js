import React from 'react';
import './Header.css';
import {images} from '../../constants'
import { SubHeading } from '../../components';

const Header = () => {
  return (
  <div className='app__header app__wrapper section__padding' id='home'>

    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour"/>
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Experience Gericht: Where indulgence meets sophistication in every bite. Our dishes are crafted to elevate your dining experience, combining the essence of tradition with modern flair.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='WelcomeImage' />
    </div>
    
  </div>
  )
}

export default Header;
