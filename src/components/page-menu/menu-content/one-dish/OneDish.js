import React from "react";
import "./OneDish.scss";

const OneDish = (props) => {
  const {dish} = props;
  return (
    <div className="menu__grid__case appears-with-opacity" id={props.id}>
      <div className="dish-and-price">
        <div className="menu__case__dish">
          <div className="menu__case__dish-title">
            <p>{dish.name}</p>
          </div>
          <div className="menu__case__dish-subtitle">
            <p>{dish.subtitle}</p>
          </div>
        </div>
        <div className="menu__case__price">{dish.price / 100} €</div>
      </div>
      <div className="validation__box">
        <i className="fas fa-check-circle"></i>
      </div>
    </div>
  );
};

export default OneDish;
