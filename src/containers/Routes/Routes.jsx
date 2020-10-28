import React from "react";
import { Router } from "@reach/router";
import NotFound from "../../containers/NotFound";
import Dashboard from "../../containers/Dashboard";
import DealsPage from "../DealsPage/DealsPage";
//  import SignUp from '../../components/SignUp';
// import CardList from '../../components/CardList'
import RestaurantDetails from '../../components/RestaurantDetails';


import restaurants from '../../data/restaurants';

const Routes = (props) => {
  
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <DealsPage 
        path="/browseDeals" />
      <RestaurantDetails path="/restaurants/:restaurantId"/>
    </Router>
  );
};

export default Routes;
