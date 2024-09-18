import React, { useState } from 'react';

function CollapseMenu({ sections }) {
  const [open, setOpen] = useState(Array(sections.length).fill(false));

  const handleToggle = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <div className="collapse-menu">
      <ul>
        {sections.map((section, index) => (
          <div className='collapse-container' key={index}>
            <li>
              <h2>{section.title}</h2>
              <button
                type='button'
                className='collapse-btn'
                onClick={() => handleToggle(index)}>
                {open[index] ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </li>
            <div className={`collapse-content ${open[index] ? "show" : "hidden"}`}>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CollapseMenu;
