import React from "react";
import Header from "../components/header/Header";
import MenuImg from "../components/page-menu/MenuImg";
import MenuContent from "../components/page-menu/MenuContent";
import Footer from "../components/footer/Footer";
import menusList from "../assets/data/menusList";
import { useLocation } from "react-router-dom";

const Menu = (props) => {
  const { search } = useLocation();
  const idRestaurant = new URLSearchParams(search).get("id");
  const targetRestaurant = menusList.filter(
    (restaurant) => restaurant.id.toString() === idRestaurant
  )[0];
  return (
    <div>
      <Header arrowShow={true} />
      <MenuImg restaurantImg={targetRestaurant.img} />
      <MenuContent restaurant={targetRestaurant} />
      <Footer />
    </div>
  );
};

export default Menu;
