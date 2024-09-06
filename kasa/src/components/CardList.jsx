import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function CardList({ properties }) {
    return (
        <div className="card-list">
            {properties.map((property) => (
                <Card key={property.id} property={property} />
            ))}
        </div>
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

export default CardList;