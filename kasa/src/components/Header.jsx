import React from 'react';
import '../styles/header.sass';
import Banner from './Banner';
import logo from '../assets/logo.png';
import homebanner from '../assets/homebanner.png';
import aboutbanner from '../assets/aboutbanner.png';
import { useLocation } from 'react-router-dom';

function Header() {
const location = useLocation();

const isHome = location.pathname === '/';
const bannerImage = location.pathname === '/about' ? aboutbanner : homebanner;
const bannerAlt = location.pathname === '/about' ? 'About banner' : 'Home banner';
const bannerTitle = isHome ? 'Chez vous, partout et ailleurs' : '';
  return (
  <>
  <header>
    <img src={logo} alt="logo" />
    <nav>
    <ul>
      <li className={location.pathname === '/' ? 'active' : ''}><a href='/'>Accueil</a></li>
      <li className={location.pathname === '/about' ? 'active' : ''}><a href='/about'>A propos</a></li>
      </ul>
    </nav>
  </header>
  <Banner imageSrc={bannerImage} imageAlt={bannerAlt} title={bannerTitle}/>
  </>
  );
}

export default Header; 
