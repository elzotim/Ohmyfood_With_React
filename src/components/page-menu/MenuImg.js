import React from "react";
import "./MenuImg.scss";

const MenuImg = (props) => {
  return (
    <div className="img">
      <img
        className="img__image"
        src={props.restaurantImg}
        alt="La palette du goût"
      />
    </div>
  );
};

export default MenuImg;
