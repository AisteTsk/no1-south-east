import React from "react";
import { Router } from "@reach/router";
import CardList from "../../components/CardList/CardList";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../NotFound/NotFound";
import RestaurantDetails from "../../components/RestaurantDetails";

const Routes = (props) => {
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <CardList 
      individualRestaurant={props.individualRestaurant} 
      restaurants={props.restaurants} 
      selectedRestaurant={props.selectedRestaurant}      
      path="/browseDeals" />
      <RestaurantDetails restaurants={props.selectedRestaurant} path="/RestaurantDetails"/>
    </Router>
  );
};

export default Routes;