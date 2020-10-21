import React from "react";
import { Router } from "@reach/router";
import CardList from "../../components/CardList/CardList";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../NotFound/NotFound";
import RestaurantDetails from "../../components/RestaurantDetails";
import restaurants from "../../data/restaurants";

const Routes = () => {
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <CardList path="/browseDeals" />
      <RestaurantDetails path="/RestaurantDetails" restaurants={restaurants}/>
    </Router>
  );
};

export default Routes;