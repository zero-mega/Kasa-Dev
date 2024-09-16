import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.sass";
import PropTypes from "prop-types";

function CardList({ properties }) {
    return (
        <div className="card-list">
            {properties.map((property) => (
                <Card key={property.id} property={property} />
            ))}
        </div>
    );
}

function Card({ property }) {
    const { id, cover, title } = property;

    return (
        <Link to={`/logement/${id}`}><div className="card">
        <img src={cover} alt={title} />
        <div className="card-content">
            <h2>{title}</h2>
        </div>
    </div></Link>
    );
}

CardList.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

Card.propTypes = {
    property: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id : PropTypes.string.isRequired
    }).isRequired
};

export default CardList;