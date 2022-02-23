import React from "react";
import Button from "../../Reusable/button/Button";
import Slogan from "./slogan/Slogan";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <Slogan />
        <div className="hero__button">
          <Button><p>Explorer nos restaurants</p></Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
