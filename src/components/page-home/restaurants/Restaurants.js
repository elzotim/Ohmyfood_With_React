import React from "react";
import Restaurant from "./restaurant/Restaurant";
import restaurantList from "../../../assets/data/restaurantsList";
import "./Restaurants.scss";

const Restaurants = () => {
  return (
    <section className="restaurants">
      <h2 className="restaurants__title">Restaurants</h2>
      <div className="restaurant__cards">
        {restaurantList.map((restaurant) => (
          <li key={restaurant.id}>
            <Restaurant restaurant={restaurant} />
          </li>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
