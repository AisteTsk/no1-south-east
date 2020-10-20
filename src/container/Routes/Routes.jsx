import React from "react";
import { Router } from "@reach/router";

// import NotFound from "../../container/NotFound";
import CardList from "../../components/CardList/CardList";
import Dashboard from "../Dashboard";
import LandingPage  from "../../components/LandingPage";

// dummmy links added for now
// import Restaurant from "../../data/restaurants";

const Routes = () => {
  return (
    <Router>

      <Dashboard path="/" />
            {/* <NotFound path="/" /> */}
      <CardList path="cardList" />
      {/* <Restaurant path="restaurant" /> */}
    </Router>
  );
};

export default Routes;