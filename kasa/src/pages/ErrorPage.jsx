import React from 'react';

function ErrorPage() {
  return (
    <div className='error-content'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d’accueil</a>
    </div>
  );
}

export default ErrorPage;