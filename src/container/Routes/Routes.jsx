import React from "react";
import { Router } from "@reach/router";

import NotFound from "../../container/NotFound";
import CardList from "../../components/CardList/CardList";

// dummmy links added for now

import Restaurant from "../../App";

const Routes = () => {
  return (
    <Router>
      <NotFound default path="/" />
      <CardList path="CardList" />
      <Restaurant path="restaurant" />
    </Router>
  );
};

export default Routes;