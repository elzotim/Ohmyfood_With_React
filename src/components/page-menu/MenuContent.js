import React from "react";
import "./MenuContent.scss";
import RestaurantName from "./menu-content/restaurant-name/RestaurantName";
import DishCategory from "./menu-content/dish-category/DishCategory";
import Button from "../Reusable/button/Button";

const MenuContent = (props) => {
  const { restaurant } = props;
  let differentsTypeMenu = [];

  restaurant.menus.forEach((menu) => {
    differentsTypeMenu.push(menu.type);
    differentsTypeMenu = [...new Set(differentsTypeMenu)];
  });
  console.log(props)
  return (
    <section id="menu">
      <div className="menu">
        <RestaurantName>{restaurant.restaurantName}</RestaurantName>
        <div className="menu__grid">
          {differentsTypeMenu.map((typeOfMenu, index) => (
            <DishCategory
              key={index}
              title={typeOfMenu}
              menus={restaurant.menus.filter(
                (menu) => menu.type === typeOfMenu
              )}
              numberMenus={restaurant.menus.length}
            />
          ))}
        </div>
        <div className="menu__contain-button">
          <div className="menu__button">
            <Button>Commander</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuContent;
