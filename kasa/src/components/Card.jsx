import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.sass";
import PropTypes from "prop-types";

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

Card.propTypes = {
    property: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default Card;

