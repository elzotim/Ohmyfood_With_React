import React from "react";
import "./NameAndCity.scss";


const NameAndCity = (props) => {
  return (
    <div className="restaurant__block-info">
      <div className="restaurant__block-name">{props.name}</div>
      <div className="restaurant__block-city">{props.city}</div>
    </div>
  );
};

export default NameAndCity;
