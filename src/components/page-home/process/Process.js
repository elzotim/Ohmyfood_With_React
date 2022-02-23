import React from "react";
import Bubbles from "./bubbles/Bubbles";
import Title from "./title/Title";
import "./Process.scss"

const Process = () => {
  return (
    <section className="process__contain">
      <div className="process">
        <Title />
        <Bubbles />
      </div>
    </section>
  );
};

export default Process;
