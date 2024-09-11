import React, { useState } from 'react';
import '../styles/collapse.sass';

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
        {open[0] ? '▼' : '▶'}
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
        {open[1] ? '▼' : '▶'}
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
        {open[2] ? '▼' : '▶'}
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
        {open[3] ? '▼' : '▶'}
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