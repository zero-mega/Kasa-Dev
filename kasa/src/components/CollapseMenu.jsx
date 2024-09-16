import React, { useState } from 'react';

function CollapseMenu() {

  const [open, setOpen] = useState([false, false, false, false]);
const handleToggle = (index) => {
  const newOpen = [...open];
  newOpen[index] = !newOpen[index];
  setOpen(newOpen);
};

  return (
  
    <div className="collapse-menu">
<ul>

  <div className='collapse-container'>
    <li>
      <h2>Fiabilité</h2>
      <button
      type='button'
      className='collapse-btn'
      onClick={() => handleToggle(0)}>
        {open[0] ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" fill="currentColor"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" fill="currentColor"/></svg>}
      </button> 
    </li>
    <div className={`collapse-content ${open[0] ? "show" : "hidden"}`}>
      <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sontrégulierment vérifiées par nos équipes.</p>
    </div>
    </div>

    <div className='collapse-container'>
    <li>
      <h2>Respect</h2>
      <button
      type='button'
      className='collapse-btn'
      onClick={() => handleToggle(1)}>
        {open[1] ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" fill="currentColor"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" fill="currentColor"/></svg>}
      </button> 
    </li>
    <div className={`collapse-content ${open[1] ? "show" : "hidden"}`}>
      <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    </div>
    </div>

    <div className='collapse-container'>
    <li>
      <h2>Service</h2>
      <button
      type='button'
      className='collapse-btn'
      onClick={() => handleToggle(2)}>
        {open[2] ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" fill="currentColor"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" fill="currentColor"/></svg>}
      </button> 
    </li>
    <div className={`collapse-content ${open[2] ? "show" : "hidden"}`}>
      <p>La qualité du service est au coeur de notre engagement chez Kasa.Nous veillons à ce que chaque interaction que ce soit avec nos hôtes ou nos locataire, soit empreinte de respect et de bienveillance</p>
    </div>
    </div>

    <div className='collapse-container'>
    <li>
      <h2>Sécurité</h2>
      <button
      type='button'
      className='collapse-btn'
      onClick={() => handleToggle(3)}>
        {open[3] ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" fill="currentColor"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" fill="currentColor"/></svg>}
      </button> 
    </li>
    <div className={`collapse-content ${open[3] ? "show" : "hidden"}`}>
      <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux criteres de sécurité etablis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de verifier que les standards sont bien respectés. Nous organisons egalement des ateliers sur la securité domestique pour nos hôtes.</p>
    </div>
    </div>
  
</ul>
    </div>
    
  );
  
}

export default CollapseMenu; 