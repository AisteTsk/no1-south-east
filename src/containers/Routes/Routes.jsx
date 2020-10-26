import React, {useState} from "react";
import { Router } from "@reach/router";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import DealsPage from '../DealsPage';
import Login from '../../components/Login';
import RestaurantDetails from '../../components/RestaurantDetails';

import restaurants from '../../data/restaurants';

const Routes = () => {
  
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <DealsPage path="/browseDeals" />
      <Login path="/Login" />
      <RestaurantDetails path="/RestaurantDetails" restaurants={restaurants}/>
    </Router>
  );
};

export default Routes;


