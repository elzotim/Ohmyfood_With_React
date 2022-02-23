import React from "react";
import Image from "./Image";
import "../Restaurant.scss";

const BackgroundImg = (props) => {
  return (
    <div className="restaurant__card-image">
      <Image image={props.img} />
    </div>
  );
};

export default BackgroundImg;
