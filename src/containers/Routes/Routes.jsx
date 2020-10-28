import React from "react";
import { Router } from "@reach/router";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import SignIn from '../../components/SignIn';
import Register from '../../components/Register';
import CardList from '../../components/CardList'
import RestaurantDetails from '../../components/RestaurantDetails';


import restaurants from '../../data/restaurants';

const Routes = (props) => {
  
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <SignIn path="/sign-in" /> 
      <Register path="/register" />
      <CardList 
        restaurants={restaurants} 
        path="/browseDeals" />
      <RestaurantDetails path="/restaurants/:restaurantId"/>
    </Router>
  );
};

export default Routes;
