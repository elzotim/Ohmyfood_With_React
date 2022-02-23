import React from "react";
import Bubble from "./Bubble";
import "./Bubbles.scss"

const Bubbles = () => {
  return (
    <div className="process__steps">
      <Bubble
        number="1"
        icon="fas fa-mobile-alt"
        title="Choisissez un restaurant"
      />
      <Bubble number="2" icon="fas fa-list-ul" title="Composez votre menu" />
      <Bubble number="3" icon="fas fa-store" title="Dégustez au restaurant" />
    </div>
  );
};

export default Bubbles;
