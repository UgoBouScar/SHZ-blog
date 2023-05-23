import React from "react";
import ArtisteCard from "@components/ArtisteCard";
import artistes from "@assets/data.json";

function Artistes() {
  return (
    <section>
      <div className="row">
        <ArtisteCard artiste={artistes[9]} />
      </div>
    </section>
  );
}

export default Artistes;
