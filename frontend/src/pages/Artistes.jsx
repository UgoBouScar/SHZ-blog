import React from "react";
import ArtisteCard from "@components/ArtisteCard";
import artistes from "@assets/data.json";

function Artistes() {
  return (
    <section>
      <div>
        {artistes.map((artiste) => (
          <ArtisteCard artiste={artiste} />
        ))}
      </div>
    </section>
  );
}

export default Artistes;
