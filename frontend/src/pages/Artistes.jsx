import React from "react";
import { Helmet } from "react-helmet";
import ArtisteCard from "@components/ArtisteCard";
import artistes from "@assets/data.json";

function Artistes() {
  return (
    <section>
      <Helmet>
        <title> Tous les Artistes SHZ</title>
        <meta name="description" content />
      </Helmet>
      <div>
        {artistes.map((artiste) => (
          <ArtisteCard artiste={artiste} />
        ))}
      </div>
    </section>
  );
}

export default Artistes;
