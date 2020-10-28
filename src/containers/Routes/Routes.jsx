import React from "react";
import { Router } from "@reach/router";
import DealsPage from "../DealsPage/DealsPage";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import SignIn from '../../components/SignIn';
import Register from '../../components/Register';
// import DealsPage from '../../containers';
import RestaurantDetails from '../../components/RestaurantDetails';

import restaurants from '../../data/restaurants';

const Routes = (props) => {
  
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <DealsPage path="/browseDeals" />
      <SignIn path="/sign-in" /> 
      <Register path="/register" />
      <RestaurantDetails path="/restaurants/:restaurantId"/>
    </Router>
  );
};

export default Routes;
