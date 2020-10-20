import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "../../component/filterFunctionality/Card";
import restaurants from "../../data/restaurants";
import CardList from "../../component/filterFunctionality/CardList";
import FeedbackPanel from "../../component/filterFunctionality/FeedbackPanel";

const DashBoard = (props) => {

  const checkRestaurantName = (restaurant) => {
    const restaurantName = restaurant.name.toLowerCase();
    return restaurantName.includes(props.searchText.toLowerCase());
  };

  // const toggleFav = (recipe) => {
  //   recipe.isFav = !recipe.isFav;
  // };

  const matchingRestaurants = restaurants.filter(checkRestaurantName);

  const contentJsx = matchingRestaurants.length ? (
    <CardList restaurants={matchingRestaurants} />
  ) : (
      <FeedbackPanel
        header="No matches"
        text="None of our restaurants matched that search"
      />
    )
  return <section>{contentJsx}</section>;
};

export default DashBoard;