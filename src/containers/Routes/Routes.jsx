import React from "react";
import { Router } from "@reach/router";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import DealsPage from '../DealsPage';
import SignIn from '../../components/SignIn';
import Register from '../../components/Register';
import RestaurantDetails from '../../components/RestaurantDetails';

import restaurants from '../../data/restaurants';

const Routes = () => {
  
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <DealsPage path="/browseDeals" />
      <SignIn path="/sign-in" /> 
      <Register path="/register" />
      <RestaurantDetails path="/RestaurantDetails" restaurants={restaurants}/>
    </Router>
  );
};

export default Routes;
