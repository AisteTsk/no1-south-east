import React from "react";
import { Router } from "@reach/router";
import DealsPage from "../DealsPage/DealsPage";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import SignIn from '../../components/SignIn';
import Register from '../../components/Register';
import RestaurantDetails from '../../components/RestaurantDetails';
import FaQs from "../FaQs/FaQs";
import Terms from "../Terms/Terms";
import Logo from "../../components/Logo";

const Routes = () => {
  return (
    <Router>
      <Dashboard path="/" />
      <Logo path="/" />
      <NotFound path="/404" />
      <FaQs path="/faq" />
      <Terms path="/terms-and-conditions" />
      <DealsPage path="/browseDeals" />
      <SignIn path="/sign-in" /> 
      <Register path="/register" />
      <RestaurantDetails path="/restaurants/:databaseId"/>
    </Router>
  );
};

export default Routes;