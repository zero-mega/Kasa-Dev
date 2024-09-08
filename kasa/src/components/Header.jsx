import React from 'react';
import '../styles/header.sass';
import Banner from './Banner';
import logo from '../assets/logo.png';
import homebanner from '../assets/homebanner.png';
import aboutbanner from '../assets/aboutbanner.png';
import { useLocation } from 'react-router-dom';

function Header() {
const location = useLocation();

const bannerImage = location.pathname === '/about' ? aboutbanner : homebanner;
const bannerAlt = location.pathname === '/about' ? 'About banner' : 'Home banner';

  return (
  <>
  <header>
    <img src={logo} alt="logo" />
    <nav>
    <ul>
      <li><a href='/'>Accueil</a></li>
      <li><a href='/about'>A propos</a></li>
      </ul>
    </nav>
  </header>
  <Banner imageSrc={bannerImage} imageAlt={bannerAlt}/>
  </>
  );
}

export default Header; 
