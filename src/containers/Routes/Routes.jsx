import React from "react";
import { Router } from "@reach/router";

import Dashboard from "../Dashboard";

const Routes = (props) => {
  return (
    <Router>
      <Dashboard path="/" searchText={props.searchText} />
    </Router>
  );
};

export default Routes;


