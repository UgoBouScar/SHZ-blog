import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import artistes from "@assets/data.json";

function OneArtist() {
  const { id } = useParams();
  const selectedArtiste = artistes.find(
    (artiste) => artiste.id === parseInt(id, 10)
  );

  return (
    <div>
      <div className="header">
        <Helmet>
          <title>{selectedArtiste.titre} - BLOG SHZ</title>
          <meta name="description" content={selectedArtiste.descript} />
        </Helmet>
        <h2>{selectedArtiste.titre}</h2>
        <h3>{selectedArtiste.style}</h3>
      </div>
      <div className="imginfo">
        <img src={selectedArtiste.image.src} alt={selectedArtiste.image.alt} />
        <p>{selectedArtiste.description}</p>
      </div>
    </div>
  );
}

export default OneArtist;
