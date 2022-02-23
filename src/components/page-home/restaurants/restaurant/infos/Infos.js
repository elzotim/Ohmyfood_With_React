import React from "react";
import Hearth from "../../../../Reusable/hearth/Hearth";
import NameAndCity from "./NameAndCity";
import "./Infos.scss";

const Infos = (props) => {
  return (
    <div className="restaurant__block">
      <NameAndCity name={props.name} city={props.city} />
      <div className="restaurant__block-hearth">
        <Hearth />
      </div>
    </div>
  );
};

export default Infos;
