import React from "react";
import "./styles/main.sass"
import CardList from "./components/CardList";
import properties from "./logements.json"


function Homepage() {
  return <CardList properties={properties} />;
}

export default Homepage;
