import React from "react";
import { useParams } from "react-router-dom";

import artistes from "@assets/data.json";

function OneArtist() {
  const { id } = useParams();
  const selectedArtiste = artistes.find(
    (artiste) => artiste.id === parseInt(id, 10)
  );

  return (
    <div>
      <div className="header">
        <h2>{selectedArtiste.titre}</h2>
      </div>
      <div className="imginfo">
        <img src={selectedArtiste.image.src} alt={selectedArtiste.image.alt} />
        <p>{selectedArtiste.description}</p>
      </div>
    </div>
  );
}

export default OneArtist;
