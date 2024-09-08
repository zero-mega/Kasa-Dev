import React from "react";
import "../styles/main.sass"
import CardList from "../components/CardList";
import properties from "../logements.json"


function Homepage() {
  return <div>
 <div className="gallery">
 <CardList properties={properties} />
 </div>
  </div>;
}

export default Homepage;
