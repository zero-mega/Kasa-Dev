import React from 'react';
import '../styles/banner.sass';

function Banner({imageSrc, imageAlt}) {
  return <div className='banner'>
  <img src={imageSrc} alt={imageAlt} />
  </div>;
}

export default Banner; 