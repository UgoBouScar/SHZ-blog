import React from "react";
import PropTypes from "prop-types";
import ArtisteType from "../types/artist";

function ArtisteCard({ artiste }) {
  return <div>{artiste.titre}</div>;
}

ArtisteCard.propTypes = {
  artiste: PropTypes.instanceOf(ArtisteType).isRequired,
};

export default ArtisteCard;
