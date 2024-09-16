import React from "react";
import CardList from "./components/CardList";
import properties from "./logements.json"


function Homepage() {
  return <CardList properties={properties} />;
}

export default Homepage;
