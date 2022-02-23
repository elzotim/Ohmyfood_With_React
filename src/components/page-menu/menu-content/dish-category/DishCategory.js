import React from "react";
import OneDish from "../one-dish/OneDish";
import "./DishCategory.scss";

const DishCategory = (props) => {
  const { title, menus } = props;
  const orderedMenus = menus.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }

    return 0;
  });
  return (
    <div className="menu__grid__bloc">
      <div className="menu__grid__title">
        <h3>{title}</h3>
      </div>
      {orderedMenus.map((menu, index) => (
        <OneDish key={index} dish={menu} id={"case-" + (index + 1)} />
      ))}
    </div>
  );
};

export default DishCategory;
