import React from "react";
import PropTypes from "prop-types";

const Restaurants = ({ restaurants }) => {
  return (
    <ul className="restaurants">
      {restaurants.map(restaurant => {
        return (
          <li key={restaurant.id} className="restaurant">
            <h2>{restaurant.name}</h2>
            <p>Cuisine:</p>
            <p>
              {restaurant.cuisine.map(cuisine => {
                return cuisine + " ";
              })}{" "}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Restaurants;
