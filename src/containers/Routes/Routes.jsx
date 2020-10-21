import React, {useState} from "react";
import { Router } from "@reach/router";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import DealsPage from '../DealsPage';

const Routes = () => {
  
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <DealsPage path="/browseDeals"  />
    </Router>
  );
};

export default Routes;


