import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams(); // Récupère le paramètre d'URL `id`

  return (
    <div>
      <h1>Détails du produit {id}</h1>
    </div>
  );
}

export default ProductPage;
