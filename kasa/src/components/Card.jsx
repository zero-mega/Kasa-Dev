import React from "react";
import PropTypes from "prop-types";

function Card({ property }) {
    const { cover, title } = property;

    return (
        <div className="card">
            <img src={cover} alt={title} />
            <div className="card-content">
                <h2>{title}</h2>
            </div>
        </div>
    );
}

Card.propTypes = {
    property: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default Card;

