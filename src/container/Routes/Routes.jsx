import React from "react";
import { Router } from "@reach/router";
import CardList from "../../components/CardList/CardList";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../NotFound/NotFound"

const Routes = () => {
  return (
    <Router>
      <Dashboard path="/" />
      <NotFound path="/404" />
      <CardList path="/browseDeals" />
      {/* <Restaurant path="restaurant" /> */}
    </Router>
  );
};

export default Routes;