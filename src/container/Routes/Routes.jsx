import React from "react";
import { Router } from "@reach/router";
import CardList from "../../components/CardList";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../NotFound/NotFound";
import RestaurantDetails from "../../components/RestaurantDetails";
import restaurants from "../../data/restaurants";
import Login from "../Login/Login";

const Routes = () => {
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <CardList path="/browseDeals" />
      <RestaurantDetails path="/RestaurantDetails" restaurants={restaurants}/>
      <Login path="/Login" />
    </Router>
  );
};

export default Routes;