import React from "react";
import CardList from "../components/CardList";
import properties from "../logements.json"

function Homepage() {
  return <div>
  <h1>Bienvenue sur la page d'accueil</h1>
  <CardList properties={properties} />
  </div>;
}

export default Homepage;
