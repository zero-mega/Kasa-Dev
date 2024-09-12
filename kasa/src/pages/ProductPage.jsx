import React from 'react';
import { useParams } from 'react-router-dom';
import properties from "../logements.json";

function ProductPage() {
  const { id } = useParams(); 
  const property = properties.find((property) => property.id === id);

  if (!property) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="product-page">
      <h1>{property.title}</h1>
      <img src={property.cover} alt={property.title} />
      <p>{property.description}</p>
      {/* Ajoutez d'autres informations comme l'équipement, la note, etc. */}
    </div>
  );
}


export default ProductPage;
