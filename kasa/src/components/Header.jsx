import React from 'react';
import Banner from './Banner';

function Header() {
  return <header>
    <div>Logo</div>
    <nav>
      <li><a href='/'>Accueil</a></li>
      <li><a href='/about'>A propos</a></li>
    </nav>
    <Banner />
  </header>;
}

export default Header; 
