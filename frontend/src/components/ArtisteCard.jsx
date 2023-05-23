import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArtisteType from "../types/artist";

function ArtisteCard({ artiste }) {
  return (
    <div className="fullbody">
      <div className="container">
        <div className="header">
          <h2>{artiste.titre}</h2>
        </div>
        <div className="imginfo">
          <img src={artiste.image.src} alt={artiste.image.alt} />
        </div>
        <div className="info">
          <Link to={`/artiste/${artiste.id}`}>
            <input type="button" value="More Info" />
          </Link>
        </div>
      </div>
    </div>
  );
}

ArtisteCard.propTypes = {
  artiste: PropTypes.instanceOf(ArtisteType).isRequired,
};

export default ArtisteCard;
