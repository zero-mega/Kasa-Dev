import React from "react";
import { useParams } from "react-router-dom";
import properties from "../logements.json";
import ErrorPage from "./ErrorPage";
import { FaStar } from "react-icons/fa";

function ProductPage() {
  const { id } = useParams();
  const property = properties.find((property) => property.id === id);

  if (!property) {
    return <ErrorPage />;
  }

  return (
    <>
       <div className="product-page">
      <img src={property.cover} alt={property.title} />
      
      <div className="product-info">
      <div className="product-details">
        <h1>{property.title}</h1>
        <p>{property.location}</p>
      </div>
      <div className="product-author">
        <img src={property.host.picture} alt={property.host.name} />
        <p>{property.host.name}</p>
      </div>
      </div>

      <div className="product-reviews">
        <ul>
          {property.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < property.rating ? "fas fa-star" : "far fa-star"} />
          ))}
        </div>
      </div>

    </div>
    </>
  );
}

export default ProductPage;

