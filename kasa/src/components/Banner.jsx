import React from 'react';
import '../styles/banner.sass';

function Banner({imageSrc, imageAlt, title}) {
  return( 
  
  <div className='banner'>
  
  <img src={imageSrc} alt={imageAlt} />
  
  {title && <div className='banner-title'>
  <h1>{title}</h1>
  </div>}

  </div>
  );
}

export default Banner; 