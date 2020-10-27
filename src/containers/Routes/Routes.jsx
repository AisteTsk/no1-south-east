import React from "react";
import { Router } from "@reach/router";
import NotFound from "../../container/NotFound";
import Dashboard from "../../container/Dashboard";
// import DealsPage from '../DealsPage';
// import SignUp from '../../components/SignUp';
import CardList from '../../components/CardList'
import RestaurantDetails from '../../components/RestaurantDetails';


import restaurants from '../../data/restaurants';

const Routes = (props) => {
  
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <CardList 
        restaurants={restaurants} 
        path="/browseDeals" />
      <RestaurantDetails path="/restaurants/:restaurantId"/>
    </Router>
  );
};

export default Routes;
