import React from 'react';
import '../styles/collapse.sass';

function CollapseMenu() {

  return (
  
    <div className="collapse-menu">

      <ul>
        <li><a href='/'>Fiabilité</a><span>test</span></li>
        <li><a href='/about'>Respect</a></li>
        <li><a href='/about'>Service</a></li>
        <li><a href='/about'>Securité</a></li>
        </ul>
    </div>
    
  );
  
}

export default CollapseMenu; 